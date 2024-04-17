/*
	2.1. Mostrar el salario mínimo, máximo y promedio por cada departamento.
*/

SELECT D.Nombre as Departamento, MIN(E.Salario) as Minimo, MAX(E.Salario) as Maximo, ROUND(AVG(E.Salario),2) as Promedio
FROM dbo.Departamentos D 
INNER JOIN dbo.Empleados E ON D.id =  E.DepartamentoId
GROUP BY D.Nombre;

/*
	2.2. Listar los departamentos que tienen 3 o más empleados.
*/

SELECT D.Nombre as Departamento, COUNT(*) as 'No. Empleados' 
FROM Departamentos D INNER JOIN Empleados E ON D.id = E.DepartamentoId 
GROUP BY D.Nombre 
HAVING COUNT(*) >= 3;

/*
	2.3. Mostrar los colaboradores que tienen al menos 1 año de haber ingresado, indicando en una columna los meses que tienen de haber ingresado.
*/

SELECT Nombre as Colaborador, DATEDIFF(MONTH, FechaIngreso, GETDATE()) as Meses 
FROM Empleados E WHERE DATEDIFF(MONTH, FechaIngreso, GETDATE()) > 12
ORDER BY Nombre ASC;

/*
	2.4. Mostrar una lista de los empleados, ordenándolos primero por los que pertenecen al departamento de Mercadeo, 
	y luego por ordenados por el nombre del departamento y nombre del empleado.
*/

SELECT E.Nombre as Colaborador, D.Nombre as Departamento FROM  Empleados E 
INNER JOIN Departamentos D ON E.DepartamentoId = D.id
ORDER BY
	CASE 
		WHEN D.Nombre = 'Mercadeo' THEN 1
		ELSE 2
	END,
	D.Nombre, E.Nombre;

/*
	2.5. Listar los 2 empleados con mayor salario de cada departamento.
*/

SELECT E.Nombre as Empleado, D.Nombre as Departamento, E.Salario as Salario FROM  Empleados E
INNER JOIN Departamentos D ON E.DepartamentoId = D.id
WHERE (
	SELECT COUNT(*)
	FROM Empleados E2
	WHERE E2.DepartamentoId = E.DepartamentoId AND E2.Salario>= E.Salario
)<=2
ORDER BY D.Nombre ,E.Salario DESC

/*
	2.6. Listar los empleados de cada departamento, agregando una columna que muestre el número de línea agrupado por cada departamento.

*/

SELECT ROW_NUMBER() OVER (PARTITION BY D.Nombre ORDER BY E.Nombre) as Numero, E.Nombre as Empleado, D.Nombre as Departamento FROM  Empleados E
INNER JOIN Departamentos D ON E.DepartamentoId = D.id