export const API_URL = 'http://localhost:8000';

export const API_ROUTES = {
    'allCompetitors': API_URL + '/api/competitors',
    'singleCompetitor': (handle) => {
        return `${this.API_ROUTES.allCompetitors}/${handle}`;
    },
    'allRatings': API_URL + '/api/ratings',
    'competitorRatings': (handle) => {
        return `${this.API_ROUTES.allRatings}/${handle}`;
    }
}
