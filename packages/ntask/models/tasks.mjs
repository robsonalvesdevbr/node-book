// // biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
// class Tasks {
// 	static findAll(params, callback) {
// 		const tasks = [{ title: "Fazer compras" }, { title: "Consertar o pc" }];
// 		callback(tasks);
// 	}
// }

// export default Tasks;

export function findAll(params, callback) {
	const tasks = [{ title: "Fazer compras" }, { title: "Consertar o pc" }];
	callback(tasks);
}
