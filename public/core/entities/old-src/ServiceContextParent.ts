const getAndValidatePropFromProps = require('@bimo/core-utils-get-and-validate-prop-from-props');
const { serializeThis, parseThis } = require('@bimo/core-utils-serialization');
const { Item } = require('@bimo/core-utils-collection');

class ServiceContextParent extends Item {
  constructor(props) {
    super(props);
    this.sctxName = getAndValidatePropFromProps('sctxName', props, `string`, 'Base');
  }
}

ServiceContextParent.prototype.serializeModel = serializeThis;
ServiceContextParent.parseModel = parseThis;

module.exports = ServiceContextParent;