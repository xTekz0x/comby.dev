/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Comby",
  "tagline": "Structural code search and replace for ~every language.",
  "url": "https://comby.dev",
  "baseUrl": "/",
  "organizationName": "@rvtond",
  "projectName": "comby",
  "scripts": [
    {
      "src": "https://plausible.io/js/plausible.js",
      "async": true,
      "defer": true,
      "data-domain": "comby.dev"
    }
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [
      {
        "caption": "Featured blog → Automatically Migrating Eq of No (/=) in Haskell",
        "image": "img/blog-solid.svg",
        "infoLink": "https://reasonablypolymorphic.com/blog/comby/"
      },
      {
        "caption": "Projects and merged changes using Comby",
        "image": "img/tools-solid.svg",
        "infoLink": "/projects"
      }
    ],
    "markdownOptions": {
      "typographer": true,
      "quotes": "“”‘’"
    }
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../website/docs",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/comby-tools/comby.dev/edit/master/website/docs/",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Comby",
      "logo": {
        "src": "img/comby-logo.svg"
      },
      "items": [
        {
          "href": "/docs/get-started",
          "label": "Get started",
          "position": "left"
        },
        {
          "to": "docs/overview",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "/en/projects",
          "label": "Projects & Talks",
          "position": "left"
        },
        {
          "href": "https://github.com/comby-tools/comby",
          "label": "GitHub",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [],
      "copyright": "© 2023 @rvtond",
      "logo": {
        "src": "img/comby-logo.svg"
      },
      "style": "light"
    },
    "algolia": {
      "appId": "9EP71DIXLY",
      "apiKey": "1d268924ecaa37dfab8e862837fa2918",
      "indexName": "comby",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": [],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "path": "i18n",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "themes": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
