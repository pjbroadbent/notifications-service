import {createReducer, ActionType} from 'typesafe-actions';

import {StoredNotification} from '../../model/StoredNotification';

import * as actions from './actions';
import Types from './types';

export type NotificationMap = {[key: string]: StoredNotification};

export interface NotificationsState {
    readonly notifications: NotificationMap;
}

type NotificationsAction = ActionType<typeof actions>;

const initialState: NotificationsState = {
    notifications: {}
};

const reducer = createReducer<NotificationsState, NotificationsAction>(initialState)
    // Add a new notification to the store.
    .handleAction(
        Types.CREATE,
        (state, action): NotificationsState => {
            const {id} = action.payload;
            const newState = {
                ...state,
                notifications: {
                    ...state.notifications,
                    [id]: action.payload
                }
            };
            return newState;
        }
    )
    // Remove notifications from the store
    .handleAction(
        Types.REMOVE,
        (state, action) => {
            const removeNotifications = action.payload.notifications;
            const notifications = {...state.notifications};
            removeNotifications.forEach(toRemove => {
                delete notifications[toRemove.id];
            });

            return ({
                ...state,
                notifications
            });
        }
    );

export default reducer;

