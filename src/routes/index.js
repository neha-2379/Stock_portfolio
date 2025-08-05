const { Router } = require('express');
const { IndexController } = require('../controllers');

const indexController = new IndexController();

function setRoutes(app) {
    console.log("✅ setRoutes() called - routes are loading");

    // ✅ LOGIN route (NEW)
    app.post('/api/login', indexController.loginUser.bind(indexController));// db is passed here

    // Companies
    const companiesRouter = Router();
    companiesRouter.get('/', indexController.getCompanies.bind(indexController));
    companiesRouter.post('/', indexController.createCompanies.bind(indexController));
    companiesRouter.patch('/:company_id', indexController.update_one_value_Companies.bind(indexController));
    companiesRouter.put('/:company_id', indexController.update_all_values_Companies.bind(indexController));
    companiesRouter.delete('/:company_id', indexController.delete_Companies.bind(indexController));
    app.use('/api/companies', companiesRouter);

    // Transactions
    const transactionsRouter = Router();
    transactionsRouter.get('/', indexController.getTransactions.bind(indexController));
    transactionsRouter.post('/', indexController.createTransactions.bind(indexController));
    transactionsRouter.patch('/:transaction_id', indexController.update_one_value_Transactions.bind(indexController));
    transactionsRouter.put('/:transaction_id', indexController.update_all_values_Transactions.bind(indexController));
    transactionsRouter.delete('/:transaction_id', indexController.delete_Transactions.bind(indexController));
    app.use('/api/transactions', transactionsRouter);


    // Users
    const usersRouter = Router();
    usersRouter.get('/', indexController.getUsers.bind(indexController));
    usersRouter.post('/', indexController.createUsers.bind(indexController));
    usersRouter.patch('/:user_id', indexController.update_one_value_Users.bind(indexController));
    usersRouter.put('/:user_id', indexController.update_all_values_Users.bind(indexController));
    usersRouter.delete('/:user_id', indexController.delete_Users.bind(indexController));
    app.use('/api/users', usersRouter);

    const watchlistRouter = Router();
    watchlistRouter.get('/:user_id', indexController.getWatchlist.bind(indexController));
    watchlistRouter.post('/', indexController.addToWatchlist.bind(indexController));
    watchlistRouter.delete('/', indexController.removeFromWatchlist.bind(indexController));
    app.use('/api/watchlist', watchlistRouter);
}

module.exports = { setRoutes };



