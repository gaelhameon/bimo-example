/**
 * This class is not serializable. It is meant to be computed from an existing vehicle schedule.
 */

const Item = require('@bimo/core-utils-item');

const VehicleTaskClassFactory = () => {
  class VehicleTask extends Item {
    constructor(props) {
      super(props);
      /** @type {import ('./VehicleUnit')} */
      this.vehicleUnit = props.vehicleUnit;
      this.vehicleUnit.vehicleTask = this;

      /** @type {import ('./BlocksCollection')} */
      this.blocksThatStartWithThisVehu = props.blocksThatStartWithThisVehu;

      /** @type {String} */
      this.id = this.vehicleUnit.vehuInternalNumber;

      /** @type {String} */
      this.label = this.vehicleUnit.vehuIdentifierUser;
    }

    /** @type {import ('./VehicleSchedule')} */
    get vehicleSchedule() {
      return this.parent && this.parent.parent;
    }

    get codeRoulement() {
      return this.vehicleUnit.vehuCodeRoulement || this.label.substr(0, 3);
    }

    get shortLoggingOutput() {
      return `(${this.id})-"${this.label}"-[${this.blocks.count()}]`;
    }

    get longLoggingOutput() {
      return `${this.shortLoggingOutput}\n${this.blockActivities.map((ba) => ba.shortLoggingOutput).join('\n')}`;
    }

    get businessLoggingOutput() {
      return `${this.label} (${this.vehicleUnit.vehuVehicleType})\n${this.blockActivities.map((ba) => ba.shortLoggingOutput).join('\n')}`;
    }

    /** @type {import ('./BlocksCollection')} */
    get blocks() {
      return this.vehicleSchedule.blocksAndActsAndSectionsByVta.get(this).blocks;
    }

    /** @type {import ('./BlockActivitiesCollection')} */
    get blockActivities() {
      return this.vehicleSchedule.blocksAndActsAndSectionsByVta.get(this).blockActivities;
    }

    /** @type {import ('./BlockSectionsCollection')} */
    get blockSections() {
      return this.vehicleSchedule.blocksAndActsAndSectionsByVta.get(this).blockSections;
    }
  }

  return VehicleTask;
};

module.exports = VehicleTaskClassFactory;
