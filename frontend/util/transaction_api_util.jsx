export const updateUserBalance = transaction => (
    $.ajax({
        url: `/api/users/${transaction.user_id}`,
        method: 'PATCH',
        data: { transaction }
    })
)
export const createNewTransaction = transaction => (
    $.ajax({
        url: "/api/transactions",
        method: "POST",
        data: { transaction }
    })
)

export const getAllTransactions = transaction => (
    $.ajax({
        url: "/api/transactions",
        method: "GET",
        data: { transaction }
    })
)

export const getOneTransaction = transaction => (
    $.ajax({
        url: `/api/transactions/:id`,
        method: "GET",
        data: { transaction }
    })
)


export const showUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET',
        data: { userId }

    })
)


