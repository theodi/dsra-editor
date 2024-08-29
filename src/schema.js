// src/schema.js
export const schema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      title: { type: "string", title: "Title" },
      id: { type: "integer", title: "ID" },
      text: { type: "string", title: "Text" },
      extra_text: { type: "string", title: "Extra Text" },
      category: { type: "string", title: "Category" },
      options: {
        type: "array",
        items: {
          type: "object",
          properties: {
            option: { type: "string", title: "Option" },
            explain_risk: { type: "boolean", title: "Explain Risk" },
            risk_level: { type: "string", title: "Risk Level", enum: ["red", "green", "amber"] }
          }
        }
      },
      considerations: {
        type: "object",
        properties: {
          title: { type: "string", title: "Considerations Title" },
          items: {
            type: "array",
            items: { type: "string", title: "Consideration Item" }
          }
        }
      },
      background_info: {
        type: "object",
        properties: {
          title: { type: "string", title: "Background Info Title" },
          text: { type: "string", title: "Background Info Text" }
        }
      },
      examples: {
        type: "object",
        properties: {
          title: { type: "string", title: "Example Title" },
          text: { type: "string", title: "Example Text" }
        }
      },
      mitigating_actions: {
        type: "object",
        properties: {
          title: { type: "string", title: "Mitigating Actions Title" },
          text: { type: "string", title: "Mitigating Actions Text" }
        }
      },
      explain: {
        type: "object",
        properties: {
          exampleRisks: {
            type: "object",
            properties: {
              title: { type: "string", title: "Example Risks Title" },
              items: {
                type: "array",
                items: { type: "string", title: "Risk Item" }
              }
            }
          },
          exampleActions: {
            type: "object",
            properties: {
              title: { type: "string", title: "Example Actions Title" },
              items: {
                type: "array",
                items: { type: "string", title: "Action Item" }
              }
            }
          }
        }
      }
    },
    required: [
      "title"
    ]
  }
};

export const uischema = {
  type: "ListWithDetail",
  scope: "#/properties/",
  options: {
  },
  detail: {
    type: "VerticalLayout",
    elements: [
      { type: "Control", scope: "#/properties/id" },
      { type: "Control", scope: "#/properties/title" },
      { type: "Control", scope: "#/properties/text", options: { multi: true } },
      { type: "Control", scope: "#/properties/extra_text", options: { multi: true } },
      { type: "Control", scope: "#/properties/category" },
      {
        type: "Control",
        scope: "#/properties/options",
        options: {
          detail: {
            type: "HorizontalLayout",
            elements: [
              { type: "Control", scope: "#/properties/option" },
              { type: "Control", scope: "#/properties/explain_risk" },
              { type: "Control", scope: "#/properties/risk_level" }
            ]
          }
        }
      },
      { type: "Control", scope: "#/properties/considerations" },
      {
        type: "Control",
        scope: "#/properties/background_info",
        options: {
          detail: {
            type: "VerticalLayout",
            elements: [
              { type: "Control", scope: "#/properties/title" },
              { type: "Control", scope: "#/properties/text", options: { multi: true } }
            ]
          }
        }
      },
      {
        type: "Control",
        scope: "#/properties/examples",
        options: {
          detail: {
            type: "VerticalLayout",
            elements: [
              { type: "Control", scope: "#/properties/title" },
              { type: "Control", scope: "#/properties/text", options: { multi: true } }
            ]
          }
        }
      },
      {
        type: "Control",
        scope: "#/properties/mitigating_actions",
        options: {
          detail: {
            type: "VerticalLayout",
            elements: [
              { type: "Control", scope: "#/properties/title" },
              { type: "Control", scope: "#/properties/text", options: { multi: true } }
            ]
          }
        }
      },
      {
        type: "Control",
        scope: "#/properties/explain",
        options: {
          detail: {
            type: "VerticalLayout",
            elements: [
              { type: "Control", scope: "#/properties/exampleRisks" },
              { type: "Control", scope: "#/properties/exampleActions" }
            ]
          }
        }
      }
    ]
  }
};

