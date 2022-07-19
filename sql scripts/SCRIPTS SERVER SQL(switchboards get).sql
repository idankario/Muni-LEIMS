/*  AVG muncipalty BY id muncipalty  */  
SELECT o.office_name, AVG( s.energy_inetensity) AS energy_inetensity_average
  FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users ou
    ON ou.office_id = sw.office_id    
INNER JOIN MuniLEIMS.area a
    ON a.area_id = sw.area_id
INNER JOIN MuniLEIMS.office o
    ON o.office_id = ou.office_id
WHERE
   ss.is_active=1
group by o.office_id
order by energy_inetensity_average asc;

/*  top 5 muncipalty BY id muncipalty  */  
SELECT o.office_name, AVG( s.energy_inetensity) AS energy_inetensity_average
  FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users ou
    ON ou.office_id = sw.office_id    
INNER JOIN MuniLEIMS.area a
    ON a.area_id = sw.area_id
INNER JOIN MuniLEIMS.office o
    ON o.office_id = ou.office_id
WHERE
    ss.is_active="active"

group by o.office_id
order by energy_inetensity_average asc
LIMIT 5;


/*  last 5 muncipalty BY id muncipalty  */  
SELECT o.office_name, signed AVG( s.energy_inetensity)  AS energy_inetensity_average
  FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users ou
    ON ou.office_id = sw.office_id    
INNER JOIN MuniLEIMS.area a
    ON a.area_id = sw.area_id
INNER JOIN MuniLEIMS.office o
    ON o.office_id = ou.office_id
WHERE
    ss.is_active=1

group by o.office_id
order by energy_inetensity_average desc
LIMIT 5;


