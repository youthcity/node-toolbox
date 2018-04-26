var work = {
	insert:'INSERT INTO user(id, name, age) VALUES(0,?,?)',
	update:'update user set name=?, age=? where id=?',
	delete: 'delete from user where id=?',
	queryById: 'select * from user where id=?',
	queryAll: 'select * from user',
	get_works_by_page_limt: 'select id, work_url from tbl_user_works limit , VALUES(0,3)',
};

module.exports = work;