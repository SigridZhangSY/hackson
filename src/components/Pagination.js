import React from 'react';
import {FlatButton} from 'material-ui';
import {ImageNavigateBefore, ImageNavigateNext, NavigationFirstPage, NavigationLastPage} from 'material-ui/svg-icons';

import '../stylesheets/pagination.scss'

export default class Pagination extends React.Component {
    render() {
        let {page, perPage, selectPage} = this.props;
        let count = this.props.data.count;
        let pageSum = Math.ceil(count / perPage);
        let pageList = [];
        let curPage = page * 1;
        perPage = perPage * 1;
        for (let i = 1; i <= pageSum; i++)
            pageList.push(i)
        return (
            <div className="paginationList">
                {(curPage > 1 ?
                    <FlatButton className="number" icon={<NavigationFirstPage/>}
                                onClick={() => {
                                    selectPage(1, perPage);
                                }}/> :
                    <FlatButton className="number" icon={<NavigationFirstPage/>} disabled={true}/>)}
                {(curPage > 1 ?
                    <FlatButton className="number" icon={<ImageNavigateBefore/>}
                                onClick={() => {
                                    selectPage(curPage - 1, perPage);
                                }}/> :
                    <FlatButton className="number" icon={<ImageNavigateBefore/>}  disabled={true}/>)}
                {pageList.map((page) => {
                    return (page === curPage ?
                        <FlatButton className="select number" key={page} label={page} disabled={true}/> :
                        <FlatButton className="number" key={page} label={page}
                                    onClick={() => {
                                        selectPage(page, perPage)
                                    }}/>)

                })}
                {(curPage < pageSum ?
                <FlatButton className="number" icon={<ImageNavigateNext/>}
                            onClick={() => {
                                selectPage(curPage + 1, perPage);
                            }}/> :
                    <FlatButton className="number" icon={<ImageNavigateNext/>} disabled={true}/>)}
                {(curPage < pageSum ?
                <FlatButton className="number" icon={<NavigationLastPage/>}
                            onClick={() => {
                                selectPage(pageSum, perPage);
                            }}/> :
                    <FlatButton className="number" icon={<NavigationLastPage/>} disabled={true}/>)}
            </div>
        );
    }
};