// You can also unset the migrated identityId after running this script this can be done by replacing $set: {...} by: $unset: "identityId"

db.getCollection('users').update(
	// query
	{},
	// update
	[
		{
			$set: {
				id: '$identityId'
			}
		}
	],
	// options
	{
		multi: true, // update only one document
		upsert: false // insert a new document, if no existing document match the query
	}
);
db.getCollection('trusted-roots').update(
	// query
	{},
	// update
	[
		{
			$set: {
				id: '$identityId'
			}
		}
	],
	// options
	{
		multi: true, // update only one document
		upsert: false // insert a new document, if no existing document match the query
	}
);
db.getCollection('subscriptions').update(
	// query
	{},
	// update
	[
		{
			$set: {
				id: '$identityId'
			}
		}
	],
	// options
	{
		multi: true, // update only one document
		upsert: false // insert a new document, if no existing document match the query
	}
);
db.getCollection('channel-data').update(
	// query
	{},
	// update
	[
		{
			$set: {
				id: '$identityId'
			}
		}
	],
	// options
	{
		multi: true, // update only one document
		upsert: false // insert a new document, if no existing document match the query
	}
);
