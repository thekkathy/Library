import React, { Fragment } from 'react'
import IsLoadedProvider from '../context/isLoadedContext';
import BookResultsListProvider from '../context/bookResultsListContext';
import MyShelfProvider from '../context/myShelfContext';
import SelectedBookProvider from '../context/selectedBookContext';

const ContextWrapper = ({ children }) => {
    return (
        <Fragment>
            <IsLoadedProvider>
                <BookResultsListProvider>
                    <MyShelfProvider>
                        <SelectedBookProvider>
                            {children}
                        </SelectedBookProvider>
                    </MyShelfProvider>
                </BookResultsListProvider>
            </IsLoadedProvider>
        </Fragment>
    )
}

export default ContextWrapper
