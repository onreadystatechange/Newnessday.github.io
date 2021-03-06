/**
 * @fileOverview 首页
 * @time 2017/12/4
 * @author liugang
 * */

import {combineReducers} from 'redux';

import index from './index/index';
import movie from './movie';
import cinema from './cinema';
import seat from './seat';
import user from './user';

export default combineReducers({
    index,
    movie,
    cinema,
    seat,
    user
});


