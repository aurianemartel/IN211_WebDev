#

for i in `vercel ls`
do
    d=${i#https://}
    echo Removing "$d"
    vercel remove "$d" --yes
done

