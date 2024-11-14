import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'expo-router'; 
import { GET_CONTENT_NODES } from '../gql/queries';
import useGetDocumentNodes from '../hooks/useGetDocumentNodes';

const Dashboard: React.FC = () => {
  const { data, loading, error } = useGetDocumentNodes();
  const router = useRouter();

  const handleLogout = () => {
    // Clear token and navigate to login
    router.push('/');
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading content nodes.</Text>;

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <FlatList
        data={data?.Admin?.Tree?.GetContentNodes?.edges}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.node}>{JSON.stringify(item)}</Text>
        )}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  node: { padding: 10, borderBottomWidth: 1 },
});

export default Dashboard;