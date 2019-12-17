import axios from 'axios';




const ApiService = {
    departments: [],
    employees: [],
    deptEmployees: [],

    API_KEY: '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
    SESSION_TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4ZWIxYjUyMmY2MGQxMWZhODk3ZGUxZGM2MzUxYjdlOCIsImlzcyI6Imh0dHA6Ly9leGNlbC5zdGFnaW5nLXNwZy5kcmVhbWZhY3RvcnkuY29tL2FwaS92Mi9zeXN0ZW0vYWRtaW4vc2Vzc2lvbiIsImlhdCI6MTU3NjIyNTg5NywiZXhwIjoxNTc5ODI1ODk3LCJuYmYiOjE1NzYyMjU4OTcsImp0aSI6ImhGVU83aW9TVlhkakFERGgiLCJ1c2VyX2lkIjoxLCJmb3JldmVyIjpmYWxzZX0.6aMMemEMvwmLlwdoiyu6fY9FnNznME358DJTgvtVSc0',
    API_URL : 'http://excel.staging-spg.dreamfactory.com/api/v2/mysql/_table',

    getDepartments() {
        if (this.departments.length > 0) {
            return this.departments
        }
        else {
            return axios.get(`${this.API_URL}/departments`, {
                dataType: 'json',
                headers: {
                    'X-DreamFactory-API-Key': this.API_KEY,
                    'X-DreamFactory-Session-Token': this.SESSION_TOKEN
                }
            })
                .then(response => {
                    this.departments = response.data.resource;
                    return response.data.resource;
                })
                .catch(e => {
                    console.error(e)
                })
        }
    },
    getDepartmentById(id) {
        return axios.get(`${this.API_URL}/departments/${id}`, {
            dataType: 'json',
            headers: {
                'X-DreamFactory-API-Key': this.API_KEY,
                'X-DreamFactory-Session-Token': this.SESSION_TOKEN
            }
        })
            .then(response => response.data)
            .catch(e => {
                console.error(e)
            })
    },
    getDeptEmployees() {
        if (this.deptEmployees.length > 0) {
            return this.deptEmployees;
        }
        else {
            return axios.get(`${this.API_URL}/dept_emp`, {
                dataType: 'json',
                headers: {
                    'X-DreamFactory-API-Key': this.API_KEY,
                    'X-DreamFactory-Session-Token': this.SESSION_TOKEN
                }
            })
                .then(response => {
                    this.deptEmployees = response.data.resource;
                    return response.data.resource;
                })
                .catch(e => {
                    console.error(e)
                })
        }
    },
    getEmployees() {
        if (this.employees.length > 0) {
            return this.employees;
        }
        else {
            return axios.get(`${this.API_URL}/employees`, {
                dataType: 'json',
                headers: {
                    'X-DreamFactory-API-Key': this.API_KEY,
                    'X-DreamFactory-Session-Token': this.SESSION_TOKEN
                }
            })
                .then(response => {
                    this.employees = response.data.resource;
                    return response.data.resource;
                })
                .catch(e => {
                    console.error(e)
                })
        }
    },
    getEmployeeById(id) {
        return axios.get(`${this.API_URL}/employees/${id}`, {
            dataType: 'json',
            headers: {
                'X-DreamFactory-API-Key': this.API_KEY,
                'X-DreamFactory-Session-Token': this.SESSION_TOKEN
            }
        })
            .then(response => response.data)
            .catch(e => {
                console.error(e)
            })
    },

};

export default ApiService;
