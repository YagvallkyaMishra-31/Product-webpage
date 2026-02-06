import * as userService from "../services/user.service.js";
export const getUser = (req, res) => {
    const users = userService.getAll();
    res.json(users);
};
export const createUser = (req, res) => {
    const user = userService.create(req.body);
    res.status(201).json(user);
};
export const updateUser = (req, res) => {
    const user = userService.update(req.params.id, req.body);
    res.json(user);
};
export const deleteUser = (req, res) => {
    userService.remove(req.params.id);
    res.status(204).send();
};
// this file defines the suer controller and the controllers job is to handle reuqest and response
// and forward the actual business logic to the service layer
// 