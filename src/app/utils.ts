export class Utils {

    static getLocationName(location): string {
        return {
            0: 'Início',
            1: 'Codeforces',
            2: 'Codepit'
        }[location];
    }

}