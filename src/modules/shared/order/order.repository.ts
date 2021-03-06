import { EntityRepository, Repository } from 'typeorm';

import { Order } from '@orders/models/order.entity';


@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {

}
