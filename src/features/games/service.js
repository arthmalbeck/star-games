import { apiURL } from '../../constants/api';
import { httpService } from '../../commons/http.service';

const args = { ...apiURL, path: '/games' };

export function listGames() {
    return httpService.get(args);
}