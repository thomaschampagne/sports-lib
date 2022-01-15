export class LapTypesHelper {
  static getLapTypesAsUniqueArray(): string[] {
    return Array.from(
      new Set(
        Object.keys(LapTypes).reduce((array: string[], key: string) => {
          array.push(LapTypes[<keyof typeof LapTypes>key]); // Important get the key via the enum else it will be chaos
          return array;
        }, [])
      )
    );
  }
}

/**
 * This enum works like a all matchers for normalized lap types between different naming across services
 */
export enum LapTypes {
  'unknown' = 'Unknown',
  'Unknown' = 'Unknown',
  'Start' = 'Start',
  'start' = 'Start',
  'Stop' = 'Stop',
  'stop' = 'Stop',
  'Manual' = 'Manual',
  'manual' = 'Manual',
  'Autolap' = 'Autolap',
  'AutoLap' = 'Autolap',
  'autolap' = 'Autolap',
  'Auto lap' = 'Autolap',
  'Distance' = 'Distance',
  'distance' = 'Distance',
  'Location' = 'Location',
  'location' = 'Location',
  'interval' = 'Interval',
  'Interval' = 'Interval',
  'Low Interval' = 'Low Interval',
  'High Interval' = 'High Interval',
  'Time' = 'Time',
  'time' = 'Time',
  'HeartRate' = 'Heart Rate',
  'Heart Rate' = 'Heart Rate',
  'position_start' = 'Position start',
  'Position start' = 'Position start',
  'position_lap' = 'Position lap',
  'Position lap' = 'Position lap',
  'position_waypoint' = 'Position waypoint',
  'Position waypoint' = 'Position waypoint',
  'position_marked' = 'Position marked',
  'Position marked' = 'Position marked',
  'session_end' = 'Session end',
  'Session end' = 'Session end',
  'fitness_equipment' = 'Fitness equipment',
  'fitness equipment' = 'Fitness equipment',
  'Fitness equipment' = 'Fitness equipment',
  'FitnessEquipment' = 'Fitness equipment'
}
