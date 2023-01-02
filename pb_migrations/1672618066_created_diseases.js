migrate((db) => {
  const collection = new Collection({
    "id": "smvn5qxtzj22fqb",
    "created": "2023-01-02 00:07:46.175Z",
    "updated": "2023-01-02 00:07:46.175Z",
    "name": "diseases",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fzqgcay5",
        "name": "diseaseName",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b1jyarep",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 300,
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
  const collection = dao.findCollectionByNameOrId("smvn5qxtzj22fqb");

  return dao.deleteCollection(collection);
})
