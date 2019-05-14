
set @bg3= DATE_ADD(DATE_ADD(curdate(),interval -3  MONTH ),interval -day(curdate())+1 day); #2.1
set @bg1= DATE_ADD(DATE_ADD(curdate(),interval -1  MONTH ),interval -day(curdate())+1 day); #4.1
set @now= DATE_ADD(curdate(),interval -day(curdate())+1 day); #5.1

--门店会员新注册的会员数
select ebs.id,ebs.code,ebs.name,count(cvi.id) ct from crm_vip_info cvi
inner join ed_base_shop ebs
on cvi.RegChannel=ebs.Id
where cvi.RegTime BETWEEN @bg1 and @now
group by ebs.id,ebs.code,ebs.name

-- 根据门店确认新老会员消费人数
select a.ShopId,ebs.name,sum(case when a.bg3>1 and a.bg1ct>1 then 1 else 0 end) oldvip,
sum(case when a.bg3=0 and a.bg1ct>1 then 1 else 0 end) newvip,
sum(bg1sale) bg1sale
from (
select  csv.ShopId,csv.VipId,min(csv.SaleDate) SaleDate,
sum(case when  csv.SaleDate<@bg3 then 1 else 0 end ) bg3,
sum(case when  csv.SaleDate<@bg3 and csv.SaleType='s' then 1 when  csv.SaleDate<@bg3 and csv.SaleType='r' then -1 else 0 end ) bg3ct,
sum(case when  csv.SaleDate BETWEEN @bg3 and @now then 1 else 0 end )  bg1,
sum(case when  csv.SaleDate BETWEEN @bg3 and @now and csv.SaleType='s' then 1 
when csv.SaleDate BETWEEN @bg3 and @now and csv.SaleType='r' then -1 else 0 end ) bg1ct,
sum(case when  csv.SaleDate BETWEEN @bg3 and @now   then salemoney   else 0 end ) bg1sale
from crm_sal_vip_sale csv 
where csv.BrandId=65
group by csv.VipId,csv.ShopId ) a  
INNER JOIN ed_base_shop ebs
on a.ShopId=ebs.id
group by a.ShopId,ebs.name
 





select shopid,count(vipid) 合计会员数
,sum(newsale) 新会员金额
,sum(case when newsalect>0 then 1 else 0 end ) 新会员人数
,sum(case when newsalect>1 or newct>1 then 1 else 0 end ) 新会员复购人数
,sum(case when newsalect>1 or newct>1 then newsale else 0 end ) 新会员复购金额
,sum(oldsale) 老会员金额
,sum(case when oldsalect>0 then 1 else 0 end ) 老会员人数
,sum(case when oldsalect>1 or oldct>1 then 1 else 0 end) 老会员复购人数 
,sum(case when oldsalect>1 or oldct>1 then oldsale  else 0 end) 老会员复购金额
from( select a.shopid,a.vipid,a.newsale,newsalect,ifnull(newct,0) newct,oldsale,oldsalect,ifnull(oldct,0) oldct from 
(select csv.shopid,csv.vipid
,sum(case when cvi.regtime>'2019-01-01'  then csv.salemoney else 0 end) newsale
,sum(case when cvi.regtime>'2019-01-01'  then 1 else 0 end) newsalect
,sum(case when cvi.regtime<'2019-01-01'  then csv.salemoney else 0 end) oldsale
,sum(case when cvi.regtime<'2019-01-01'  then 1 else 0 end) oldsalect
 from crm_sal_vip_sale csv inner join crm_vip_info cvi  on csv.VipId =cvi.id
where csv.SaleDate BETWEEN '2019-03-01' and '2019-04-01'
group by csv.vipid,csv.shopid) a
left join (select csv.shopid,csv.vipid,sum(case when cvi.regtime>'2019-01-01'  then 1 else 0 end) newct
,sum(case when cvi.regtime<'2019-01-01'  then 1 else 0 end) oldct
from crm_sal_vip_sale csv inner join crm_vip_info cvi  on csv.VipId =cvi.id
where csv.SaleDate BETWEEN '2018-12-01' and '2019-03-01'
group by csv.vipid,csv.shopid) b
on a.vipid=b.vipid and a.shopid=b.shopid
)z	
group by shopid 