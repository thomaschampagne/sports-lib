import {PrivacyClassInterface} from '../privacy/privacy.class.interface';
import {SerializableClassInterface} from '../serializable/serializable.class.interface';

export interface UserInterface extends PrivacyClassInterface, SerializableClassInterface{
  uid: string;
  acceptedPrivacyPolicy: boolean;
  acceptedDataPolicy: boolean;
  acceptedTrackingPolicy: boolean;
  acceptedDiagnosticsPolicy: boolean;
  photoURL?: string;
  displayName?: string;
  description?: string;
}