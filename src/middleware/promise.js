// export default store => next => action => {
// 	if (!action.payload || !action.payload.then) {
// 		return next(action);
// 	}

// 	action.payload.then(resp => {
// 		const newAction = {
// 			...action,
// 			payload: resp
// 		};

// 		store.dispatch(newAction);
// 	});

// 	return action.payload;
// };

//with the async await, it doesn't need anything returned;

export default store => next => async action => {
	if (!action.payload || !action.payload.then) {
		return next(action);
	}

	const resp = await action.payload;

	const newAction = {
		...action,
		payload: resp
	};

	store.dispatch(newAction);
};
