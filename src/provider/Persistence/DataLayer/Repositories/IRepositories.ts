import {Entity} from '../../../../Shared/Models/Entity';

import {HistoryRepository} from './HistoryRepository';
import {Repository} from './Repository';

/**
 * @description Schematic for repository dictionary
 */
export interface IRepositories {
    [key: string]: Repository<Entity>;
    history: HistoryRepository;
}