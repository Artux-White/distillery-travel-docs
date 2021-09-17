
import * as firebase from "firebase/compat"


export interface TravelInfo{
  id: string;
  name: string;
  country: string;
  province: string;
  availableToTravel: boolean;
  travelTime: number;
  timeUnit: string;

  passport: boolean;
  passportExpireDate: null | firebase.default.firestore.Timestamp;

  usVisa: boolean;
  usVisaExpireDate: null | firebase.default.firestore.Timestamp;

  schengenVisa: boolean;
  schengenVisaExpireDate: null | firebase.default.firestore.Timestamp;

  additionalComments: string | null;
}
