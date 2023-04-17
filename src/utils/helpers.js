const loadDetails = [
  {
    description: "A",
    watt: 100,
    qty: 1,
    daytimeHour: 1,
    backupHour: 1,
  },
  {
    description: "B",
    watt: 200,
    qty: 2,
    daytimeHour: 2,
    backupHour: 2,
  },
  {
    description: "C",
    watt: 300,
    qty: 3,
    daytimeHour: 3,
    backupHour: 3,
  },
];

const batteryDetails = {
  ah: 250,
  v: 48,
  dod: 0.7,
};

const solarDetails = {
  solarSize: 550,
  sunHour: 5,
  panelEff: 0.85,
};

function roundUpToDecimalPlace(number, decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.ceil(number * factor) / factor;
}

export class Calculator {
  constructor(loadTable, batteryDetails, solarDetails) {
    this.loadArr = loadTable;
    this.batteryDetails = batteryDetails;
    this.solarDetails = solarDetails;

    this.subTotals = this.getSubTotals();
    this.totals = this.getTotals();
    this.solarUnits = this.getSolarUnits();
    this.batteryUnits = this.getBatteryUnits();
  }

  //   Getting a sub-total load Arr
  getSubTotals() {
    const subTotalWattArr = [];
    const subTotalDayTimeArr = [];
    const subTotalNightTimeArr = [];

    // Get sub-total load,daytime,nighttime
    this.loadArr.forEach((loadrow) => {
      // sub-total watt
      const subTotalWatt = loadrow.watt * loadrow.qty;
      const dayTimeUnit = (subTotalWatt * loadrow.daytimeHour) / 1000;
      const nighTimeUnit = (subTotalWatt * loadrow.backupHour) / 1000;

      loadrow.subTotalWatt = subTotalWatt;
      loadrow.dayTimeUnit = dayTimeUnit;
      loadrow.nighTimeUnit = nighTimeUnit;
      subTotalWattArr.push(subTotalWatt);
      subTotalDayTimeArr.push(dayTimeUnit);
      subTotalNightTimeArr.push(nighTimeUnit);
    });

    return { subTotalWattArr, subTotalDayTimeArr, subTotalNightTimeArr };
  }

  //   Get the totals
  getTotals() {
    const newObj = {};
    const arr = [
      this.subTotals.subTotalWattArr,
      this.subTotals.subTotalDayTimeArr,
      this.subTotals.subTotalNightTimeArr,
    ];
    const nameArr = ["totalLoad", "totalDayTime", "totalNightTime"];

    // Get the Totals
    arr.forEach((subTotal, i) => {
      const total = subTotal.reduce((acc, cur) => {
        return acc + cur;
      }, 0);

      newObj[nameArr[i]] = total;
    });

    newObj.totalEnergy = newObj.totalDayTime + newObj.totalNightTime;

    return newObj;
  }

  getSolarUnits() {
    const calcFunc = (energyType) => {
      return (
        (energyType /
          (this.solarDetails.sunHour * this.solarDetails.panelEff)) *
        1000
      );
    };

    // Required Solar
    const requiredSolar = calcFunc(this.totals.totalEnergy);
    const minimumRequiredSolar = calcFunc(this.totals.totalDayTime);

    // Optimum Solar Size
    const modSize = this.solarDetails.solarSize;
    const optimumSolarModules = requiredSolar / modSize;
    const minimumSolarModules = minimumRequiredSolar / modSize;

    return {
      requiredSolar,
      minimumRequiredSolar,
      optimumSolarModules,
      minimumSolarModules,
    };
  }

  getBatteryUnits() {
    const battDet = this.batteryDetails;

    const batteryKWH = (battDet.ah * battDet.v) / 1000;

    const realBatteryKWH = batteryKWH * battDet.dod;

    const noOfBattery = this.totals.totalNightTime / realBatteryKWH;

    return { batteryKWH, realBatteryKWH, noOfBattery };
  }

  get getUnits() {
    const roundNumber = 1;
    // Get optimum Soalr Panel Modules
    const optimumModules = roundUpToDecimalPlace(
      this.solarUnits.optimumSolarModules,
      roundNumber
    );

    // Get minimum Solar Modules
    const minimumModules = roundUpToDecimalPlace(
      this.solarUnits.minimumSolarModules,
      roundNumber
    );

    // Get Battery
    const batteryToUse = roundUpToDecimalPlace(
      this.batteryUnits.noOfBattery,
      roundNumber
    );
    return { optimumModules, minimumModules, batteryToUse };
  }
}

const calculator = new Calculator(loadDetails, batteryDetails, solarDetails);

export const getNameVal = (e) => [e.target.name, e.target.value];
