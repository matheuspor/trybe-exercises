-- Exercício 1
SELECT MAX(SALARY) FROM hr.employees;

-- Exercício 2
SELECT (MAX(SALARY) - MIN(SALARY)) FROM employees

-- Exercício 3
SELECT JOB_ID, AVG(SALARY) AS `media-salarial` FROM employees
GROUP BY JOB_ID
ORDER BY `media-salarial` DESC;

-- Exercício 4
SELECT SUM(SALARY) FROM employees;

-- Exercício 5
SELECT 
    MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2)
FROM
    employees;
    
-- Exercício 6
SELECT JOB_ID, COUNT(*) AS programadores FROM employees
GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';

-- Exercício 7
SELECT JOB_ID, SUM(SALARY) AS soma_salário FROM employees
GROUP BY JOB_ID;

-- Exercício 8
SELECT JOB_ID, SUM(SALARY) AS soma_salário FROM employees
GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';

-- Exercício 9
SELECT JOB_ID, AVG(SALARY) AS média_salário FROM employees
GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG' ORDER BY média_salário DESC;

-- Exercício 10
SELECT 
    department_id,
    AVG(SALARY) AS média_salário,
    COUNT(DEPARTMENT_ID) AS contagem
FROM
    employees
GROUP BY DEPARTMENT_ID
HAVING contagem > 10;