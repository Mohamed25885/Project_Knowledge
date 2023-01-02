migrate((db) => {
  const collection = new Collection({
    "id": "9b0nkcuul7b4g7m",
    "created": "2023-01-01 23:51:34.663Z",
    "updated": "2023-01-01 23:51:34.663Z",
    "name": "dieses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ag7dtwsu",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 245,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m");

  return dao.deleteCollection(collection);
})
