const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

// * Battery API

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updatechargingTimeInfo();
      }
      updateAllBatteryDetails();

      //Battery charging change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });

      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }
      //Battery charging time
      battery.addEventListener("chargingtimechange", () => {
        updatechargingTimeInfo();
      });

      function updatechargingTimeInfo() {
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      //battery discharging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });

      function updateDischargingTimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      //battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });

      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      //Baterry status
    });
  }
};

battery();
