SELECT * FROM MuniLEIMS.office_users;


/* OFFICE BY USER ID  */
select MuniLEIMS.office.lat,MuniLEIMS.office.lng,MuniLEIMS.office.office_name
from MuniLEIMS.office
INNER JOIN MuniLEIMS.office_users  ON MuniLEIMS.office_users.office_id=MuniLEIMS.office.office_id
where user_id=4;


/*  switchboard BY office  */
SELECT area_name ,lat,lng FROM MuniLEIMS.area
INNER JOIN MuniLEIMS.switchboard on MuniLEIMS.switchboard.area_id=MuniLEIMS.area.area_id
where MuniLEIMS.switchboard.office_id=4;

/*  switchboard BY user  */
SELECT area_name ,lat,lng FROM MuniLEIMS.area
inner join MuniLEIMS.switchboard on  MuniLEIMS.switchboard.area_id=MuniLEIMS.area.area_id
inner join MuniLEIMS.office_users on MuniLEIMS.switchboard.office_id=MuniLEIMS.office_users.office_id
where MuniLEIMS.office_users.user_id=4;

/*  TOP/LAST SWITCHBOARD BY user  */
SELECT s.energy_inetensity,sw.name
  FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id    
WHERE
    o.user_id=4 AND ss.is_active="active"
ORDER BY s.energy_inetensity;
    
/*  AVG SWITCHBOARD BY user  */    
SELECT AVG( s.energy_inetensity) AS energy_inetensity_average
  FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id    
INNER JOIN MuniLEIMS.area a
    ON a.area_id = sw.area_id
WHERE
    o.user_id=4
    and
    ss.is_active=1
    ;
    
    
/*  TOP 5 SWITCHBOARD BY user  */ 
SELECT s.energy_inetensity,sw.name
FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id 
WHERE
    o.user_id=4 
    and
    ss.is_active="active"
ORDER BY s.energy_inetensity
LIMIT 5;


/*  LAST 5 SWITCHBOARD BY user  */ 
SELECT s.energy_inetensity,a.area_name
FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id    
INNER JOIN MuniLEIMS.area a
    ON a.area_id = sw.area_id
WHERE
    o.user_id=4 
    and 
   ss.is_active=1
LIMIT 5;

/*  update switchboard to active/not active  */ 
update MuniLEIMS.switchboard_statisticalreport
set is_active="active"
where switchboard_report_id=9;

/*   muncipalty or minstry?  */ 
select o.office_name 
from MuniLEIMS.office o
inner join MuniLEIMS.office_users ou on ou.office_id=o.office_id
where o.office_name="Ministry of Energy"
and ou.user_id=4;







 
 

