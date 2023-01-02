migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("smvn5qxtzj22fqb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "smvn5qxtzj22fqb",
    "created": "2023-01-02 00:07:46.175Z",
    "updated": "2023-01-02 00:09:48.905Z",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
