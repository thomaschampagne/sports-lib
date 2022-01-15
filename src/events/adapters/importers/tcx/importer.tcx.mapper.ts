import { DataLatitudeDegrees } from '../../../../data/data.latitude-degrees';
import { DataAltitude } from '../../../../data/data.altitude';
import { DataHeartRate } from '../../../../data/data.heart-rate';
import { DataCadence } from '../../../../data/data.cadence';
import { DataDistance } from '../../../../data/data.distance';
import { DataSpeed } from '../../../../data/data.speed';
import { DataPace } from '../../../../data/data.pace';
import { DataPower } from '../../../../data/data.power';
import { DataLongitudeDegrees } from '../../../../data/data.longitude-degrees';
import { convertSpeedToPace } from '../../../utilities/helpers';
import { findChildNode, findChildNodeValue, findTrackPointExtensionValue } from './utils.tcx';
import { SampleInfo } from '../sample-info.interface';

export const TCXSampleMapper: {
  dataType: string;
  getSampleValue(trackPointsElement: Element, sampleInfo?: SampleInfo): number | null;
}[] = [
  {
    dataType: DataLatitudeDegrees.type,
    getSampleValue: (trackPointsElement: Element) => {
      const positionChildNode: ChildNode | null = findChildNode(trackPointsElement.childNodes, 'Position');
      if (!positionChildNode) {
        return null;
      }
      return findChildNodeValue(positionChildNode.childNodes, 'LatitudeDegrees');
    }
  },
  {
    dataType: DataLongitudeDegrees.type,
    getSampleValue: (trackPointsElement: Element) => {
      const positionChildNode: ChildNode | null = findChildNode(trackPointsElement.childNodes, 'Position');
      if (!positionChildNode) {
        return null;
      }
      return findChildNodeValue(positionChildNode.childNodes, 'LongitudeDegrees');
    }
  },
  {
    dataType: DataDistance.type,
    getSampleValue: (trackPointsElement: Element) => {
      return findChildNodeValue(trackPointsElement.childNodes, 'DistanceMeters');
    }
  },
  {
    dataType: DataAltitude.type,
    getSampleValue: (trackPointsElement: Element) => {
      return findChildNodeValue(trackPointsElement.childNodes, 'AltitudeMeters');
    }
  },
  {
    dataType: DataCadence.type,
    getSampleValue: (trackPointsElement: Element) => {
      return findChildNodeValue(trackPointsElement.childNodes, 'Cadence');
    }
  },
  {
    dataType: DataHeartRate.type,
    getSampleValue: (trackPointsElement: Element) => {
      const heartRateChildNode: ChildNode | null = findChildNode(trackPointsElement.childNodes, 'HeartRateBpm');
      if (!heartRateChildNode) {
        return null;
      }
      return findChildNodeValue(heartRateChildNode.childNodes, 'Value');
    }
  },
  {
    dataType: DataCadence.type,
    getSampleValue: (trackPointsElement: Element) => {
      return findTrackPointExtensionValue(trackPointsElement.childNodes, 'RunCadence');
    }
  },
  {
    dataType: DataSpeed.type,
    getSampleValue: (trackPointsElement: Element) => {
      return findTrackPointExtensionValue(trackPointsElement.childNodes, 'Speed');
    }
  },
  {
    dataType: DataPace.type,
    getSampleValue: (trackPointsElement: Element) => {
      const speed = findTrackPointExtensionValue(trackPointsElement.childNodes, 'Speed');
      return speed !== null ? convertSpeedToPace(speed) : null;
    }
  },
  {
    dataType: DataPower.type,
    getSampleValue: (trackPointsElement: Element, sampleInfo?: SampleInfo) => {
      // Ensure power stream compliance when in some cases power sample field could be missing even if others samples have it
      // Just set watts to 0 when this happen
      // Case example: ride file "7555170032.tcx"  from integration tests
      return sampleInfo?.hasPowerMeter
        ? findTrackPointExtensionValue(trackPointsElement.childNodes, 'Watts') || 0
        : null;
    }
  }
];
