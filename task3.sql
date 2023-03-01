select result.name, result.phone, result.sum, result.avg, result.last
from (
         select u.name,
                u.phone,
                sum(o.subtotal) over (partition by u.id ) sum,
                avg(o.subtotal) over (partition by u.id)  avg,
                max(o.created) over (partition by u.id)   last
         from users u
                  join orders o on u.id = o.user_id) as result
group by result.name, result.phone, result.sum, result.avg, result.last