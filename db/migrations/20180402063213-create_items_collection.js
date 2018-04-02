const createCollection = async (db) => {
  await db.createCollection('games', {
    validator: {
      $and: [
        { _id: { $type: 'binData' } },
        { name: { $type: 'string' } },
        { year: { $type: 'date' } },
      ],
    },
    validationAction: 'error',
    validationLevel: 'strict',
  })
};

module.exports = {
  async up(db) {
    try {
      const col = await db.listCollections({ name: 'games' }).toArray()
      if(col.length > 0) {
        throw new Error('Collection games already exists in MongoDb. Exited...')
      } else {
        await createCollection(db)
      }
    } catch(err) {
      throw err
    }
  },

  async down(db) {
    try {
      await db.dropCollection('games')
    } catch(err) {
      throw err
    }
  },
};