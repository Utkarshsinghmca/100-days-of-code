           
            function calcu()
            {
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                
                var opert = document.getElementById('operators').value;
                
                if(opert === '+')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                if(opert === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(opert === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(opert === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }
            