// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "unused-imports", "import"],
  rules: {
    "prettier/prettier": 1,
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "error",
    "import/no-deprecated": "error",
    "import/no-named-as-default": "off",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "react?(|-native)",
            group: "builtin",
            position: "before",
          },
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: {
        extensions: [
          ".tsx",
          ".ios.tsx",
          ".android.tsx",
          ".ts",
          ".ios.ts",
          ".android.ts", 
        ],
      },
    },
  },
};
