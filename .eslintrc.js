module.exports =     {
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
      ],
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 0,
        "indent": [
            "error",
            4
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}