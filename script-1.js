function weather() {
    const weekWeather = {
        monday: 12,
        tuesday: 13,
        wednesday: 14,
        thursday: 9,
        friday: 8,
        saturday: 10,
        sunday: 12,
        temperatureAverage: function () {
            const temp = Number.parseInt((weekWeather.monday + weekWeather.tuesday + weekWeather.wednesday + weekWeather.thursday + weekWeather.friday + weekWeather.saturday + weekWeather.sunday) / 7);
            return temp;
        },
        temperatureMax: function () {
            let max = -100;
            for (let i in this) {
                if (this[i] > max) {
                    max = this[i];
                }
            }
            return max;
        },
        temperatureMin: function () {
            let min = 100;
            for (let i in this) {
                if (this[i] < min) {
                    min = this[i];
                }
            }
            return min;
        },
        [Symbol.toPrimitive] (hint) {
            switch(hint) {
                case "string":
                    return "(Mon-Tue-Wed-Thu-Fri-Sat-Sun)"
                    break;
                case "number":
                    return this.temperatureAverage()
                    break;
                default:
                    return "anything"
            }
        }
    }
    alert("Weekly forecast: \n \nMonday: " + weekWeather.monday + "°C \nTuesday: " + weekWeather.tuesday + "°C \nWednesday: " + weekWeather.wednesday + "°C \nThursday: " + weekWeather.thursday + "°C \nFriday: " + weekWeather.friday + "°C \nSaturday: " + weekWeather.saturday + "°C \nSunday: " + weekWeather.monday + "°C");
    alert("Average temperature this week is going to be " + Number(weekWeather) + "°C \nHighest temperature is going to be " + weekWeather.temperatureMax() + "°C \nLowest temperature is going to be " + weekWeather.temperatureMin() + "°C");
    alert("And just so you won't forget the days of the week: " + String(weekWeather));
}
weather();