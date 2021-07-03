import {httpService} from "../utils/index";


const year_20 = (params) =>{
    return httpService('movie/get2020',params,'get');
}

const year_19 = (params) =>{
    return httpService('movie/get2019',params,'get');
}

const year_18 = (params) =>{
    return httpService('movie/get2018',params,'get');
}

const year_17 = (params) =>{
    return httpService('movie/get2017',params,'get');
}

const year_16 = (params) =>{
    return httpService('movie/get2016',params,'get');
}

const year_total = (params) =>{
    return httpService('movie/getYear',params,'get');
}

const first_day = (params) =>{
    return httpService('movie/getFirst',params,'get');
}

const one_day = (params) =>{
    return httpService('movie/getOne',params,'get');
}

const year_2020 = (params) =>{
    return httpService('movie/list/get2020',params,'get');
}

const year_2019 = (params) =>{
    return httpService('movie/list/get2019',params,'get');
}

const year_2018 = (params) =>{
    return httpService('movie/list/get2018',params,'get');
}

const year_2017 = (params) =>{
    return httpService('movie/list/get2017',params,'get');
}

const year_2016 = (params) =>{
    return httpService('movie/list/get2016',params,'get');
}

const movies_rank = (params) =>{
    return httpService('movie/list/douban',params,'get');
}

const movies_t30_analyse = (params) =>{
    return httpService('movie/film_top30_analyse',params,'get');
}

const movies_t30 = (params) =>{
    return httpService('movie/film_top30_table',params,'get');
}

const get_film_actor_charts = (params) =>{
    return httpService( 'movie/film_actor_charts', params, 'get')
}

const get_film_type_charts = (params) =>{
    return httpService( 'movie/film_type_charts', params, 'get')
}

const get_film_map_charts = (params) =>{
    return httpService( 'movie/film_map_charts', params, 'get')
}

const get_film_country_charts = (params) =>{
    return httpService( 'movie/film_country_charts', params, 'get')
}

const get_film_t30_actor_charts = (params) =>{
    return httpService( 'movie/film_t30_actor_charts', params, 'get')
}

const get_film_t100 = (params) =>{
    return httpService( 'movie/list/maoyan', params, 'get')
}

export {
    movies_rank, year_2018, year_2019, year_2016, year_2017, year_2020, year_total, year_20, year_16, year_17, year_18, year_19, one_day,
    first_day, movies_t30, movies_t30_analyse, get_film_actor_charts, get_film_country_charts, get_film_map_charts, get_film_t30_actor_charts,
    get_film_type_charts, get_film_t100

}