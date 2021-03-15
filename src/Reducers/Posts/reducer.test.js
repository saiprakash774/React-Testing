import {types} from '../../actions/types';
import postsReducer from './reducers';

describe('Posts Reducer',()=>{
    it('Should return default state',()=>{
        const newState=postsReducer(undefined,{});
        expect(newState).toEqual([]);
    });

    it('Should return new state if recieving type',()=>{
        const posts=[{title:'Test 1'},{title:'Test 2'},{title:'Test 3'}];
        const newState=postsReducer(undefined,{
            type:types.GET_POST,
            payload:posts
        });
        expect (newState).toEqual(posts);
    });
});