import React from "react";
import { Text } from "react-native";

import { render, waitFor } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import { useQuery } from "@apollo/client";

import useGetDocumentNodes from "../useGetDocumentNodes";

jest.mock("@apollo/client", () => {
  const actual = jest.requireActual("@apollo/client");
  return {
    ...actual,
    useQuery: jest.fn(),
  };
});

describe("useGetDocumentNodes", () => {
  const mockData = {
    contentNodes: [
      { id: "1", title: "Document 1" },
      { id: "2", title: "Document 2" },
    ],
  };

  const mockFetchMore = jest.fn();

  it("should return loading as true initially", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
      fetchMore: mockFetchMore,
    });

    const TestComponent = () => {
      const { data, loading, error } = useGetDocumentNodes({});
      return (
        <>
          <Text testID="loading">{loading ? "Loading" : "Not Loading"}</Text>
          <Text testID="error">{error ? "Error" : "No Error"}</Text>
          <Text testID="data">{data ? "Data Loaded" : "No Data"}</Text>
        </>
      );
    };

    const { getByTestId } = render(
      <MockedProvider>
        <TestComponent />
      </MockedProvider>,
    );

    expect(getByTestId("loading").props.children).toBe("Loading");
    expect(getByTestId("error").props.children).toBe("No Error");
    expect(getByTestId("data").props.children).toBe("No Data");
  });

  it("should return data when loading is false and data is available", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      fetchMore: mockFetchMore,
    });

    const TestComponent = () => {
      const { data, loading, error } = useGetDocumentNodes({});
      return (
        <>
          <Text testID="loading">{loading ? "Loading" : "Not Loading"}</Text>
          <Text testID="error">{error ? "Error" : "No Error"}</Text>
          <Text testID="data">{data ? "Data Loaded" : "No Data"}</Text>
        </>
      );
    };

    const { getByTestId } = render(
      <MockedProvider>
        <TestComponent />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(getByTestId("loading").props.children).toBe("Not Loading");
      expect(getByTestId("error").props.children).toBe("No Error");
      expect(getByTestId("data").props.children).toBe("Data Loaded");
    });
  });

  it("should return error when there is an error", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: new Error("Something went wrong"),
      fetchMore: mockFetchMore,
    });

    const TestComponent = () => {
      const { data, loading, error } = useGetDocumentNodes({});
      return (
        <>
          <Text testID="loading">{loading ? "Loading" : "Not Loading"}</Text>
          <Text testID="error">{error ? "Error" : "No Error"}</Text>
          <Text testID="data">{data ? "Data Loaded" : "No Data"}</Text>
        </>
      );
    };

    const { getByTestId } = render(
      <MockedProvider>
        <TestComponent />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(getByTestId("loading").props.children).toBe("Not Loading");
      expect(getByTestId("error").props.children).toBe("Error");
      expect(getByTestId("data").props.children).toBe("No Data");
    });
  });
});
