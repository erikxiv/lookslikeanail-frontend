import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serializeBelongsTo: function(snapshot, json, relationship) {
    // Call standard serializer
    var result = this._super(snapshot, json, relationship);

    // Delete key from serialization if null
    var key = relationship.key;
    var belongsTo = snapshot.belongsTo(key);
    key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
    if (Ember.isNone(belongsTo)) {
      delete json[key];
    }

    return result;
  }
});