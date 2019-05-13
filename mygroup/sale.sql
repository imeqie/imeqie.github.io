
set @bg3= DATE_ADD(DATE_ADD(curdate(),interval -3  MONTH ),interval -day(curdate())+1 day); #2.1
set @bg1= DATE_ADD(DATE_ADD(curdate(),interval -1  MONTH ),interval -day(curdate())+1 day); #4.1
set @now= DATE_ADD(curdate(),interval -day(curdate())+1 day); #5.1

 
select a.ShopId,ebs.name,sum(case when a.bg3>1 and a.bg1ct>1 then 1 else 0 end) oldvip,
sum(case when a.bg3=0 and a.bg1ct>1 then 1 else 0 end) newvip
from (
select  csv.ShopId,csv.VipId,min(csv.SaleDate) SaleDate,
sum(case when  csv.SaleDate<@bg3 then 1 else 0 end ) bg3,
sum(case when  csv.SaleDate<@bg3 and csv.SaleType='s' then 1 when  csv.SaleDate<@bg3 and csv.SaleType='r' then -1 else 0 end ) bg3ct,
sum(case when  csv.SaleDate BETWEEN @bg3 and @now then 1 else 0 end )  bg1,
sum(case when  csv.SaleDate BETWEEN @bg3 and @now and csv.SaleType='s' then 1 
when csv.SaleDate BETWEEN @bg3 and @now and csv.SaleType='r' then -1 else 0 end ) bg1ct
from crm_sal_vip_sale csv 
where csv.BrandId=65
group by csv.VipId,csv.ShopId ) a  
INNER JOIN ed_base_shop ebs
on a.ShopId=ebs.id
group by a.ShopId,ebs.name
 