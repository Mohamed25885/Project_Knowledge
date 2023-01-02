migrate((db) => {
  const collection = new Collection({
    "id": "wuz4gxe9jdet4eb",
    "created": "2023-01-02 18:35:44.418Z",
    "updated": "2023-01-02 18:35:44.418Z",
    "name": "symptoms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "13auqy0f",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wuz4gxe9jdet4eb");

  return dao.deleteCollection(collection);
})
