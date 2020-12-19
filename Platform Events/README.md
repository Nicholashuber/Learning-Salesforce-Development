# Platform Events are best used when needing to implement a "Subscribe and Push Topic" Paradigmn in programming
PushTopic events provide a secure and scalable way to receive notifications for changes to Salesforce data that match a SOQL query you define.
Use PushTopic events to:

Receive notifications of Salesforce record changes, including create, update, delete, and undelete operations.
Capture changes for the fields and records that match a SOQL query.
Receive change notifications for only the records a user has access to based on sharing rules.
Limit the stream of events to only those events that match a subscription filter.
A typical application of PushTopic events is refreshing the UI of a custom app from Salesforce record changes.

PushTopic events can be received by:

Pages in the Salesforce application
Application servers outside of Salesforce
Clients outside the Salesforce application
