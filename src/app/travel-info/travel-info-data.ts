import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TravelInfo } from './models/travel-info.model';

export class TravelInfoData implements InMemoryDbService {

    createDb() {
        const travelInfo: TravelInfo[] = [
          {
            "id": "1",
            "name": "Arturo Blanco",
            "country": "México",
            "province": "León",
            "availableToTravel": true,
            "travelTime": 7,
            "timeUnit": "days",
            "passport": false,
            "passportExpireDate": null,
            "usVisa": false,
            "usVisaExpireDate": null,
            "schengenVisa": false,
            "schengenVisaExpireDate": null,
            "additionalComments": null
        }
        ]
        return { travelInfo };
    }
  }
