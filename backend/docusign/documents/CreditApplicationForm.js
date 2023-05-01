

export default function CreateDocument(data){

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Credit Application Form updated</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap');
            *{
                box-sizing:border-box;
            }
            .font_roboto{
                font-family: 'Roboto', sans-serif;
            }
            body{
                margin: 0;
                padding: 0;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                color: #000;
                line-height:1;
            }
            table{
                margin:0 auto;
            }
            table td{
                padding:5px 0;
                font-size: 15px;
            }
            td.brand_name{
                padding:18px 15px;
            }
            td.p0{
                padding: 0 !important;
            }
            td.pt{
                padding-top: 10px !important;
            }
            .flex{
                display: inline-flex;
                width: 100%;
            }
            table.border_tbl,
            table.tbl_cls{
                border-collapse: collapse;
            }
            table.border_tbl td,
            table.tbl_cls td{			
                padding:7px 10px;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
            }
            table.border_tbl td{
                border:1px solid #0f1c4e;
            }
            table.tbl_cls td{
                padding:7px 0;
            }
            table.border_tbl thead td,
            table.tbl_cls thead td{
                font-weight: 600;
                font-size: 14px;
                color: #0f1c4e;
            }
            table.border_tbl.double_border thead td{
                font-weight: 500;
                color: #171147;
            }
            table.border_tbl.double_border td{
                border-color:#171147;
                border-width:2px;
            }
            table.border_tbl thead tr.title td{
                color: #0f1c4e;
                font-weight: 600;
                font-family: 'Roboto', sans-serif;
            }
            td.side_title{
                color: #0f1c4e;
                font-weight: 500;
                font-size: 14px;
            }
            label{
                color: #0f1c4e;
                margin: 0;
                margin-right: 5px;
                font-weight: 500;
                font-size: 14px;
                white-space:nowrap;
                font-family: 'Roboto', sans-serif;
                letter-spacing:0.5px;
            }
            input:not([type='checkbox']),
            input:not([type='radio']){
                border:none;
                border-bottom:1px solid #0e1b4d;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 500;
                color: #0f1c4e;
                width: 100%;
            }		
            input.b0{
                border:none;
            }
            input.border_dotted{
                border-bottom:1px dashed #0e1b4d;
            }
            input:not([type='checkbox']):focus,
            input:not([type='checkbox']):active{
                outline:none;
            }
        </style>
    </head>
    <body>
        <section style="width:120%;max-width:900px;margin: 0 auto;padding:0 30px;">
            <table class="main_tbl" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td class="brand_name">
                        <img src="${Loadlogo()}" alt="brand logo" width="18%">
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%">
                            <tr>
                                <td width="20%">&nbsp;</td>
                                <td width="60%" align="center" bgcolor="#171147" style="font-size: 15px;text-transform:uppercase;color: #fff;font-weight: 600;">CREDIT APPLICATION FORM</td>
                                <td width="20%">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>		
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td class="p0">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                                    <div class="flex">
                                        <label for="">Legal Name of Outlet / Group:</label>
                                        <value>${data.outlet_legal_name || ""}</value>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt">
                                    <div class="flex">
                                        <label for="">Trade Name of Outlet / Group:</label>
                                        <value>${data.outlet_trade_name || ""}</value>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt">
                                    <div class="flex">
                                        <label for="">Billing Outlet Address:</label>
                                        <value>${data.billing_outlet_address || ""}</value>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p0">
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <div class="flex">
                                                    <label for="">P.O. Box:</label>
                                                    <value>${data.billing_po_box || ""}</value>
                                                </div>
                                            </td>									
                                            <td>
                                                <div class="flex">
                                                    <label for="">City:</label>
                                                    <value>${data.billing_city || ""}</value>
                                                </div>
                                            </td>									
                                            <td>
                                                <div class="flex">
                                                    <label for="">Country:</label>
                                                    <value>${data.billing_country || ""}</value>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p0">
                                    <table width="100%">
                                        <tr>
                                            <td width="25%">
                                                <div class="flex">
                                                    <label for="">Phone No.:</label>
                                                    <value>${data.billing_phone || ""}</value>
                                                </div>
                                            </td>																
                                            <td width="20%">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt">
                                    <div class="flex">
                                        <label for="">Shipping Outlet Address:</label>
                                        <value>${data.delivery_outlet_address || ""}</value>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p0">
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <div class="flex">
                                                    <label for="">P.O. Box:</label>
                                                    <value>${data.delivery_po_box || ""}</value>
                                                </div>
                                            </td>									
                                            <td>
                                                <div class="flex">
                                                    <label for="">City:</label>
                                                    <value>${data.delivery_city || ""}</value>
                                                </div>
                                            </td>									
                                            <td>
                                                <div class="flex">
                                                    <label for="">Country:</label>
                                                    <value>${data.delivery_country || ""}</value>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p0">
                                    <table width="100%">
                                        <tr>
                                            <td width="25%">
                                                <div class="flex">
                                                    <label for="">Phone No.:</label>
                                                    <value>${data.delivery_phone || ""}</value>
                                                </div>
                                            </td>																
                                            <td width="20%">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p0">
                                    <table width="100%">
                                        <tr>								
                                            <td width="55%">
                                                <div class="flex">
                                                    <label for="">No. of years in the Food Service Industry:</label>
                                                    <value>${data.service_years || ""}</value>
                                                </div>
                                            </td>	
                                            <td width="25%">
                                                <div class="flex">
                                                    <label for="">Website:</label>
                                                    <value>${data.website_url || ""}</value>
                                                </div>
                                            </td>								
                                            <td width="20%">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p0">
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <div class="flex">
                                                    <label for="">Trade License No.:</label>
                                                    <value>${data.license_number || ""}</value>
                                                </div>
                                            </td>									
                                            <td>
                                                <div class="flex">
                                                    <label for="">Trade License Expiry:</label>
                                                    <value>${data.license_expiration || ""}</value>
                                                </div>
                                            </td>									
                                            <td>
                                                <div class="flex">
                                                    <label for=""> VAT Registration No.:</label>
                                                    <value>${data.vat_number || ""}</value>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p0">
                                    <table width="100%">
                                        <tr>
                                            <td width="50%">
                                                <div class="flex">
                                                    <label for="">No. of years in the Food Service Industry:</label>
                                                    <value>${data.service_years || ""}</value>
                                                </div>
                                            </td>									
                                            <td width="25%">&nbsp;</td>
                                            <td width="25%">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                ${LoadOwnersTable(data.owners)}
                ${LoadDepatmentsTable(data.departments)}
                <tr>
                    <td class="p0">
                        <table width="100%" class="tbl_cls" cellpadding="0" cellspacing="0" style="margin-top: 15px;">
                            <thead>
                                <tr>
                                    <td align="center" bgcolor="#171147" style="padding:5px 0;color: #fff;text-transform: capitalize;letter-spacing: 0.5px;">Bank Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p0" style="padding-top: 5px !important;">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <div class="flex">
                                                        <label for="">Bank Name:</label>
                                                        <value>${data.bank_name}</value>
                                                    </div>
                                                </td>									
                                                <td>
                                                    <div class="flex">
                                                        <label for="">Branch:</label>
                                                        <value>${data.bank_branch}</value>
                                                    </div>
                                                </td>									
                                                <td>
                                                    <div class="flex">
                                                        <label for="">Swift:</label>
                                                        <value>${data.bank_swift}</value>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p0">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <div class="flex">
                                                        <label for="">Account No.:</label>
                                                        <value>${data.bank_account_number}<value>
                                                    </div>
                                                </td>									
                                                <td>
                                                    <div class="flex">
                                                        <label for="">IBAN No.:</label>
                                                        <value>${data.bank_iban}</value>
                                                    </div>
                                                </td>																				
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p0">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <div class="flex">
                                                        <label for="">Account Type:</label>
                                                        <value>${data.bank_account_type}</value>
                                                    </div>
                                                </td>									
                                                <td width="65%"></td>																				
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                ${LoadSuppliersTable(data.suppliers)}
                <tr>
                    <td class="p0">
                        <table width="100%" class="border_tbl double_border" cellpadding="0" cellspacing="0" style="margin-top: 15px;">
                            <thead>
                                <tr>
                                    <td align="center" bgcolor="#171147" style="padding:5px 0;text-transform:capitalize;color: #fff;letter-spacing: 0.5px;">
                                        Requested Credit Limit
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border:none;"></td>
                                </tr>																				
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="p0">
                        <table width="50%" class="border_tbl double_border" cellpadding="0" cellspacing="0" style="margin-top: 10px;">
                            <thead>		
                                <tr>								
                                    <td width="50%" align="center" valign="middle">Credit Limit</td>
                                    <td width="50%" align="center" valign="middle">${data.credit_limit || ""} AED</td>								
                                </tr>															
                                <tr>
                                    <td align="center" valign="middle">Credit Period</td>
                                    <td align="center" valign="middle">${data.credit_period || ""} Days</td>
                                </tr>		
                            </thead>											
                        </table>
                    </td>
                </tr>
            </table>
            <h3 style="margin-top:3em;">Agreed: ${data.authorised_signatures[0].name} <span style="color:white;">**signature_1**/</span></h3>
            <h3 style="margin-top:3em;">Agreed: ${data.authorised_signatures[1].name} <span style="color:white;">**signature_2**/</span></h3>

            <br><br><br>
        </section>
    </body>
    </html>
    `
}


function Loadlogo(){
    const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAACWCAYAAACLtRypAAAACXBIWXMAAC4jAAAuIwF4pT92AAAInGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgcGRmOlByb2R1Y2VyPSJNaWNyb3NvZnTCriBXb3JkIGZvciBNaWNyb3NvZnQgMzY1IiB4bXA6Q3JlYXRvclRvb2w9Ik1pY3Jvc29mdMKuIFdvcmQgZm9yIE1pY3Jvc29mdCAzNjUiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAzLTI4VDA5OjAxOjA1KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNC0wM1QwOTo1OTo1NiswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNC0wM1QwOTo1OTo1NiswNTozMCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA2Zjg2YTQzLTgzMzItMWY0NS1hYjM1LWQ4YmVlMmI4NGU3YyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2YTQ3ODA2OC04NTNkLWJkNDUtYTE2ZC03NzY0YmExOTkxNTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDpENTM2NkRCOC1GODVELTQyOEEtODU0Ni1FRDk4OTU2NDFEQzMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplOTllYmZkZS02YjIzLWJlNDctODhiZC05OTViNGNiYjM1MjYiIHN0RXZ0OndoZW49IjIwMjMtMDQtMDNUMDk6NTk6NTYrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZhNDc4MDY4LTg1M2QtYmQ0NS1hMTZkLTc3NjRiYTE5OTE1OCIgc3RFdnQ6d2hlbj0iMjAyMy0wNC0wM1QwOTo1OTo1NiswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplOTllYmZkZS02YjIzLWJlNDctODhiZC05OTViNGNiYjM1MjYiIHN0UmVmOmRvY3VtZW50SUQ9InV1aWQ6RDUzNjZEQjgtRjg1RC00MjhBLTg1NDYtRUQ5ODk1NjQxREMzIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6RDUzNjZEQjgtRjg1RC00MjhBLTg1NDYtRUQ5ODk1NjQxREMzIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Q3VzdG9tZXIgSW5mb3JtYXRpb24gU2hlZXQ8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8ZGM6Y3JlYXRvcj4gPHJkZjpTZXE+IDxyZGY6bGk+QW5qYWxpPC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9kYzpjcmVhdG9yPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqJyBPYAAMKZSURBVHic7J13eF1Hmf/fmTnt9nvVe7Mtd1suiWMnIXYqhISeAKHDQoCFBbb/FnadLLDLsgssZQuw1FAdQkhPSILtOLET23KVXNR7uVe3l1Nn3t8fkiGxJUeSJctJ7ud59Dy2dO45M/ecM+/MO+/7fQnkyfMqAhFpf3+/6vV6lXg8HtB1oaTTujuTyfqFIIppGp5MRvc6jqXm0qbP0C2XZdlqOpMLWJalWoatpVJ6wLZtxTAsl2M7EgJSxxYSF5yhEMx2uMwdwRAFtW1HFgIp54LZDpdw/N+SYzuSEII5DpeEEAwFUtuxZQAgiIRSRm1CiJAkwillnBEimCQ5lFFOCRFMog5jVBBChCRLNqFEMEKFLFOHUCIoZZxR5kiS5Lg9alZVFV1RZMvjc6VliVmqKpturyutSLLl0hRdcyk5WZEtj9+TVZisS4xYbrcr49IUgzGwFI+W8PnkXENDQxoAdEIILvS9zJOHLHQD8uR5MTt27GAAwDY0bHCNmGlV13NybDjpTZk5WU/Zylg06c7lMnIioWuxsbgrlzPlWDzhyqVziq5bkm5YiqYpkqwoksejaowxSZYlRZIllREqMZkoAEShQCQEogEIGZBIXAhNoJCQC9nhQhNCMO4IRSBSREEQgaJACoCEC2SIgqIAwlEwEEgQgXIhKAAQLjhDjhQRCefIEJEAIBWCU0RCAIAQApwQioSCoIQiISAopYIQgoQAUkY4EDr+QUr5+O8JUkY4gfFjCKWcEiokiVkSozZQwmWJGYQSTglxKGMmEOJQAJsQsAGIg4RYyIUtELlwhMmRO0IIxzBM3dBt2zRMQwiuS4piB4Me0xfwm25VsQsLAobmVS23W3OKi0I5l6bY7oDXDoVcuiyrTmGh16RUNYRg9pVXLtMBgOeNXJ4LRVroBuTJ82JWrFjBEomEmoNcEXGcAOHoBZlWUEP2AuN+QngpIvESwAJCoQgAvUBIsQDiI4RqQqBP1y2i6xakkpmF7s5Z/Gk+iAgMUQAIAA5iAdt0Lqom5yiADoQkCGIcAXIIGCVAUgCQQyLChECWOE6WOhBhEs/ZNiY1DaOBgJQBABsAEAD4wvYkzyud/Aoqz7yBiPTo0aMuRCzOZDAwOhipCY8kCtLZbHBoKFKRSRuedDrrj47FC3NZwx2LpQt03fRwLmRKCaOEUEKAAKUMECghhCIgBQAKAFQIZIBAEAVDRDL+A3Sh+/1KhxBAIAQpIYIQIgCIoAQEUCIAAAkAByAIiIgEOI4jAFEgohACuc/vTrjdrmxlZdGwP+BLBHyedFVdab/L7U4XFvgTxUXBEc3rSRcUeMZs2xPbsKHCJITkDVqel5A3UHlmDCLSnp4exTAM+cSJsDeTScrxkbQ6MDToSSZ1ORyJawMDEZdtGorDwVdeXhTyeTWP5tLKOOd+wcGrG0axZXHNMi1PLqsHTMvWclndZ5q2SwhkC93HPBeGy6VmVFXWgyFvVFW1tKbKOZfXNUoJ6JLE0rYjopZl5zLpXCIcHkvaJjeDQW+uIOQ33T6Ps2RxecbvLzCLKwvMJUsq0y6X3/J6LWPlypV23nX42iHv4sszIxCRPPbYY3IwWF5IqRyQCF8ibAxRCYoBaAOiCIGAcgJY7VjoSyQzRYlYeqGbnecio+umV9dNbyKRKX65YwlBIUuSiQRGECBCKKYQ2GnCeIQgD5umcYoxEqXUNbhr164kADgXoQt5LgHyK6g8LwERyeHD7UVjY9FgJmOUdrX314bDsdBA72jVwFCkJJ3MeMPhWIksSQqTmCRJzE0IkQiADACaEChxLlTHdlQuBONcyAvdpzyXPEgIoCxLFmXUZow5EqM6ALGQoC0ckeNc2I7tWG6vO+r1ujLVdWUj5aWFo8FCX2rRkpoBv98bKy/0JhtX1fcWFRVZhBBzoTuV58LJG6jXIAcPHpQLCwvZkSM9WkdHvxKPZ+XOE53a8HBcicUT8orli8q9QW/I63OV57J6g541CuKxVM1YNFmayxq+WDRRAjAejbbQfXkNciYOEMl4IAJMuLwQgIzvHwHBl9wZHP8YAhDA8Y+M/wrP+MoIjO/fjf/7EsbrcydcLjVTXFowFAp4RlxeLRkMBnuRO1FETHR09nVbpqWnU9nskpV1elmgyF7cUGLWrSwyHKfEufXWDQYAYN5N+Mog7+J7jYGIpK+vr3h0NFsgbL6MCqyXkJcgoWsEigruYPlzzx0pQDzfQHVJj2GvWhARGWMOpVQwmToyow5llDNJchihnFEimMxsSqmgjHICBBGRCCEY51wSHCnnnPGJvCyHC4lzzgQi5TaXhBBUCMEAyCUbaJJJ54KZdC4YCcerpjrG5dZSwaAvTgQ54lA+ImSp3cypJ4N+Hj569OjJeDxuQt5N+IogP9K8CkFEZWRkRD78wunGnr5waGh4rOT0qa6qsXDKNzgYKSEEQ5Qxl6bKAQLUC4CaZdkh07TcpuW4HNtRF7oPlyKUUodSyl0uJSdJzGYSc1RVzkmSZEsSs2RJMgijjixRk1JiEkocxpgOQCyg4BAEHYSwORLb4U7OcYRj25ZlG9xykAvuCO44XAghkFs2twUKIlCYps1tIVBwgYpEBVAASZIEYxIyRlCSqJCIhMAIShJBYBJKE3lTiEgcRMK5Q9BBAtyZ+D8Sxxn/PQASx3Eo50iAI0GGhFFKJFmlskwopYzKjEqqW5VlWZJcLkWTKJOoxCSZMY1QKlFKZIGgAqIECAoiKgJQQo6qEFwWiJJjc83hQnZsRzMMw2tbXDEM06MblktwLk2syi8YxpgtK5Ll8agxxqjOmJRybCfJudDTmWyiuDgYCYX8qdVNS3oKCvzxqsqS+KKlVT2MaZnNm1cmxiMX81wK5A3UK5jxBFAgzc3N7KGHjjMYtugLR1qkZVvqPYGA5iotKroiEo5WJFPZ2q72weWxWLJ4eChaq+umRwjxml09n3GDEUIEEMDxl+CPIdQIAGLc/4MCERHHFy8oScxilNlBvyepaIqhqJLl83uTiqqYbk023B5XRlVV0+NWci6XmpNVxXT73RlNk3VZVs2g15WWFclUXJIRCHhTjIGlaZrOmKxblsMDAdmxLIs7jiNSqZRTX1/PKyoqOIzP9vFiDZxnnisY97DQkZERFolEFMuSNE1TZctKenM5onDuKEbG8tqOpXCgaiKa9HDbkS3LduVypsu0HSWX1T2WZam27SiZjOHVDUszdMMdiyYLDd10JZO5QCqVDnBbyEgIIwQIASCEnHEhEzJxiwj+0a088X9EigBkPIF6el0jBEVxcWgoVBiILltWe9Tv9w4VF4eG3R7lSCpnxp588sCILFO7qKiGX7eoiFsVFg+FQuL222/Ph8AvAK/ZQWq67NixQ4nH43jnnXfaC92Ws4lGo76OjoHCyEhmtcrE6oiarnJc1qYnHtxTlUhkiiZe8jx/AgEQ/X5v3O3WskXFoVGf15V0e9yZsrKCIc2tZrx+T6qqpGBYcclZX8Ab97q9EZffm2loKBoLBAJZAHjVhzn/aU8LrBf9Ojtf10NECgDS0aOdQc4NPyJ3xWKZklzO9liW7R0bjpbkcoY7m9P98USmQM8anng8XRSJJEqy6Zx/ZCRaKQSXhICXS08giISFw4nqcDhRffpkb9OL/8gYtWVFMlesajissMxAJlB1qNJfcayyvGQQEU9Cfu/qopM3UBMgImmPtvsUkfKErYEyF3UbFDw5msQYY17r5c8wf+3q7+/XOjuHA8lkJnDgwKnaof6wv793uOh1V9xZySjzB4LeUiBYwrnwp1O5csOw3a8V40QpEYqq6JpLyaiKorvcapxRkmOM6QIhKhxh2tzWc2kja9mWlc2ZOgDREcECIrIIxABAC4nIMEZNJNQCwTOIksUBDAmlrKIoViAQyMv3zB8TqhOZrGlKjtuNEiLLABgKY5IsBPMAITIAUSkhLqBEBkA3AHgQUWWE+DWPy6Uosurze4ISoyqTJBcKDCCiKjj3GJblc2yu6oblM3XTbduOcnZStxDIbNtR+ntHa8Mj8VBn22CRZdprHcdOZbPGQHllafSD7/un5Oar1nb5/Vpy7dr6aEtLSyK/upo/8gbqRbhA9zsgFTMBTSgwITE2hkTKplLagj6Afr9fs6y+MkpZNRX0aoJQBUCWZjO5ZZbluKLRxGvCGE0GIZS73Gq2qCg4Ggx4EzX15Z3+gHessNAfq6mrbHe7Wdrv98YCAWWUMZZbvnx5AgAEIQShdaFbnwfgjys2DuOrtBmv1BCRHjlyxK9pmjscTtel04Y/lzML+nvD1dl0xh+PJUvCo/GyVDrrD0filbHxABGGXNCzz8MdVCLheM3Er1YBABBKhNfrSgCIdgJkgAJ5GpH2WRbAbbfdlkJEkZ+4zA+vyYHtyJEnPKxIK+BgNw1nWpoMO1Wh2/GygKvyWJm3sSPVYdwPdcXO1rqtNowPZgATwbrzCSKSQ4dO1PT3R8vaTvVcfWh/a1M4HK89dbJ7DQFKKQWKhEiAMCE+ihRehfeQEBCapuaCIV8kEPAka2rLO91eLR4K+aOlpYFuSZKTLq86Eu4fGewbTWWfeuq5dFlZFSqKC1etqhB+fwoLCgpQ0zTR2NiIkUgEW1tb8a677sq7aF6lTOybwb33Ai0u3kXa2nzEMJ6jAAA9PQ7NtqdIt5kh1mAfkV0h5q2WpdvfcmOlYTlFDidFo+FYYzKRLEhE0+X9A+G6ZDJTMDo8Vm3bjiIEMELO7AESAQB8fH8SREGhf7igwD+yes3i1sbldQcrqop6Cwul5wHA2LZtWz5S8AJ51Q1uZ9PdvVMTgRp1cGxvZc4a9MbMwYJIbqjCxbyeqsBqP6MKQeAY0/uMAldVT6Fr8Uim2//C1q1bxXxuSiMiaW5udpmm5H366YOV3e29/lMneotlVamRKC3S3OqyRCxVm8uaRaOj0epXm8tO1eScLEu6pqpZWZESBEAXAlO6YaYd2zGEgGRhkS/lD3pz9YuqRgMedzZUFMhU15WFfT45V1BQmvR4nFg6nTa3bdtmLHR/8rxymDBmdHh4uKCzc8CXSJi+rrb+8kQ04QmPxUI93aPFiUTKOzI8Vsgk2Scxqmma6qOUuoGA6nAedGxHs23HDUDQ5ZLThYXBQUVTugTHsf7+odOV5SXhkvKC1I3XXdYve1ly8+Y1yfr6+vxzOkNe1S4+RCRDQ6e9lp4tkiR2HbdpvQCy1ubZdY7QeczoO1bqXfK7Kn/T8ZuWfXb3RZ5dE8tiIcexasERNwHAIgDc1N89VGlajuslB766bBMAAPj83nhB0BupqS3vXbSo6kSwwB9evLiqwxPwdBYUBGOrVzeE/3g/di1sW/O8uniRSzEy8QMAcPTFx5yJZOzp6SlJp81gf3d48dBItCyTyRV2nO5ZGYkkisbGkuVd7QNLM+lsMDyaqAOAKwkBpJTaVjFvoZT1CsYeoVQ7FY/bbYho5lfwM+NVY6AQkRwd+b3bBb6Vg9nW5RkzVv2d5955pQO5oO0YBYQwt1suiJR6F3XUBbb8PaW0XzfHTutopoIQmtcCbTt37pSSyaTLJResaT5wujESTVSvWXr7Ntt2fKZpBxmjXhRCtR3u5py/Ku5JsMAb8bhdycqqkh5/wDPocWsxt9vdlkhlwqMDkejgcDgsBHckipaQHNNGdEgqY1UsLzMHBxvywQh5FpQzkYyIONbe3h4nqcwQUFuikswEExo6QqKESGXFIV9JdUmgYVFZFXeg3jStwng0uSiZyBR1dfQv3fvcscu4zQ2Hc7Np3ZKDH37/9oH1l6882Vhbsr+qpCS2YtOK6EL39VLmFT0Y7sSdUnEYtJw9EvpR853FKLDApxSsdcBZwoVdgeCsIshAljS0bbNPoNNPkR6v8q88HFQWDzdWrx2Yr7Y9++yzvmPHRl0nj54q+sLf/7RAOCLQuKxmtZ4zGhzbqbBse61l2app2u75asN8ciaXyO3RkpQSg1Gmc8HTnAvLMm1dlqSwpimpgsJAX2lZwUhJSUFi6Yr6Lo+Hjfn9anzdunVJAMBnXljonuTJMzWEEAfG89Am1fZraWlRUqmUl3MWPnFicCw+lgj1AIymUtly23ZCtmlXywpTVE1T3D5XUJIlHh2NO7/e30oSqXTi9a/7xOiqtctiK9cvyn7wg28cg/E973yi8ASvaAMV7Al6M9JArXD4tcDxTTk7UR/JtddO/BkZUbNBV8WhKt/aQ7W+zf/j9/miVYH5n7EgItm9+8BiIpwlCPRmI2dujsdSlb09w575vvbFglLqSIw6q1YvOlJUFOhfvKSmc/nq+gNerxYuKfF2RyKR1LZt25w9eQOU51XMqlWrLACITfy8JC4UEUlra2toeDhVKWxR3nKsa8PwyFhZW1vf+tbWzg+CAFpSEholVDwlbPNkMpl8KBAI5GAKY/ha5BVloBCRdEX2L+lJHKnLmJEVu/r/cTMSLJSoXGZzs0yg40KBIqCVH/arJZ1ZJ/UbTfZHQBIRkcgNJRKeecln6u7u1hKJhLZ35+mrDx05WXvVpg+tTMQzS4QQQUZpSTarh2zb0ebj2vMNY9TWNCVbWl7YHwr6ezSXMgaAbeFwYiQ8OhZHoGFEpjNCc7YtJziXzJUrV+YgX001z2ucCampdCJxqidlR0Yc4nSj4KoQ6GaSFAj5Xa7VTUsCpRWF3kw6V/APf/s/f64oUvbvP/t1fevrL9tHqTtyww3rh1/L7u5Levf9TLTNC9HHPIMDL2hJK6yWexsv053kUotnNw6mjm9zhOVFImQCzCaEmCggWupdvLPSt/L4hqXv+UEIQsZ8SO+3tLQohw4Nyrt3H/SioQcdIQLFRYW39PUON/b2jlw2MhKtchyuzPV154uJzV2HjevNGQjgIAobgGQ8Hi2xdFlNe8Pi6tPlZYUjazcuOSqEGEgkhsZuv/32BUtizpPnlQoikl27Wj2KIqpOtnQui0dTZe2n+1a6PErOpajG9bdcsQsARi0rNuByLbeKi7PixIkT/LbbbntN5Vxd6isotWv0eEAW5pttamzhYKw9Gn6g6SVHTJjYoFra6ZICJ6+u+dg/M1XuqwmuigF8es4bdMZoPvHEs8sVBeuFZb335MneZQP94aVC4KX+fU4FMsas0tJQf1VV6cDGTcv3hILBgWXL604vKis9VrO6JksIyRuiPHnmiAkjkwGAUxM/APBH2Se275kj6+KZTGU2K6/2escGkkk5uWbNmpHm5uYkAFxysmvzxSU3oLYNHSpO4UBhJN2++nvPv3eZ7mTKVcm9zOJGuUCr6MXHEmCWTLWRoKvyAAHYTQjrUlyuASs6nJvLNu3cuVMqKytzPfTQ82s++8mvVOzZc3QtpbQKgBZxwZdl0tnQxIP1ikBRZENV5UxZeVGnJLE+SmBsaChyWlblJBBIEmBDgpGMoE7C1Mwc5EsT5MlzsUAA4MRmvYypCqW6hkgykqRYgUDAWLp06WsqgOKSMFB/ygK/nXI5V2DpRp1A3OqgfY3F9TqDJ88NLkBASpipMs/wssKtuxWUHtjQcNvAXEfAbN++naqqKvf3R3227axxEFYJgW+Kx5MFpvHKicAj46XqEBBQVqScx+uOrV6zuLW+obx5yZLK7lvfet1uGBdCte9/ZKFbmyfPa5MXCfWOvvj3E2MkG/8nkteKm++S2IM6PXzg8o7orsvH9J7bw3rHOi5M7/mO98iFXSWeJccrXevvKvKuGVhWuWxsrtvU0tLitW058JtfPXXnydauNYcOnrzJds4VmLzU8bhdKX/QG7/y6rVPlJaGOi/fsmq/x+M7tnnzyiQhJB/IkCdPnkuWBVlBISI5NXbK2xN+rMbgydrdfd+53hFWnRBOFaIjT/YZSphJiWR7lII/yNTViQjHQXPCBjX0uWpX985uzXbZyg9/9fDl//CX368YGIrU+3zuKzKZXAUfr590SRj0qaCUcL/fHdNcWkRVlaRpmh0EaAwAIgjiNACJUsr7FcUw4CJoC+bJkyfPhbAgBuquu+4i7/3oO4IcxWUI5Ia43v8OBHHeiDcKiikTLbO55kM/oZx2rKm+/thct4sWUpdt234EeFvOMFZGwrErRobHZLjEDdMZKKW8tKxwuLa+/NjS5TWd12297AGZYLhpc9PQa8UlkCdPnlcPF81ATQQRqHs6fnyNztNr7m//q48DAQ8Q4UUQk66ahECkVM4uKbjyPsH5U47l7M853n6lWpmzTfu2Q23Fx9u6S3c/e+wD7/zQP64bHogsJZQGORcy5+KSNk5evzsRCHqHNm1a9YxLVZ/RZKnnuT1HuphKbcPSHKo6entXl1hH1uWNU548eV5xXJTB99DQo8XRRGeoO31opcbclwNi43Dm1C1IkAHgOVUwCRBBiGRRIp2SqNbfWHTVAzJ1HVqqNZ2qqdlywS69lpYW5Ykn9nm7umIN3af7l1imXSlr8uv7e0cWx2OpKsSXrcy5UGAg6A1TSlOM0jEg0O3ze0auu+GyIw11lUeXrqof3bx5zejLnyZPnjx5Ln3mfQWFiORIzxOrOMBaw079ZcoYKnDQ9JzPNBKgjso88XLPip80Vd6+u7Gk6fBctkkIn0eY6hIG5GP9/aPbYtFEDSK5VI3SBIgAgKtWLTpaVl7Yet0NG/eUlJft3rx5ZWpCLyxPnjx5XlXMm4E6NXykviO6e+mPmz/5prQ50mQLo5QLq0SgOO81NeYLS9R1stS19BtBd+i4FY6H56I9iEh+9aMnqgzirPmz933+jkxWr+eOaMjpRgCRXJKReR6PK+n2qKmmdUufMC2zPZ0x2gmV2lFiWUEwZZqRFOQlhfLkyfMqZU4N1M6dO6VE8IgXwAi2jD6wXndiKx1H32w52UUOWr7zf5pwCpLFiHZKpe7Dl1ffcUAUabF6cmFFvnbu3CnV1dVJt9/+t7V+j2+RpsibcrqxydDNMsOwLjnxVlWVs5RRgwCJqi5lRHVpY6tWNjzvD3hOb37dhvYzdZK+852FbmmePHnyzC9zaqCKFxX7zQzZYgt8c/vYc7c5wvRTOr1qewpzp7xycX+ZtuzzTQW3nKgpXh6bizb5fOXBWCxTbOvON1o62ur7+8KNc3He+WLJkuqWyurSU++644ZfMIW2Xnfd5uG8/H6ePHlei8yJgToZOekLcdv9YM+//z9bGPUcrRUCHfd0y5T75JIOypRmTQ3c56Zae3U1ZC6kPTt37pTS6bRy/MjIzV/4+2+v6e8dXY1CrDZN+7wJwAtFXX35cVXTelyqvN/l1o4TIsKC8B4zF0tCPl8pT548r1Eu1ECRgwcPSrF0c0FU8GKbGzdbIhcyeboIyHRCBAmnQLhLDnVJsnZ4RdP7ft8FXRlCVs1qX2VcIXgXe/Bnu/w2kQIun2dzJqNfnkxmNgk+eSj7QsEkZgKCgyisisqSU2XlRcfu/NhbHuLU39HUVJ794T1fXOgm5smTJ8+CckEGqq3tUYUGcOPOnj98KG2MvsXCbOFMPu+Ti7oL3DVty8u2fGht2dsSF6qYvW9fv+bzFSxv64t8YmwseW1/X6ThQs43HyCOR+O94Q1XPhgq9L/wlndsfVKWrZMbN260v/O/f7fQzcuTJ0+eS4ZZG6jmoYdrB1KDVac7f/YRw0k1OWhNXzgViQhq5cclpu1lKD0LkM3CBUaj7djxRP1jDz1U8/RT+9+dSmbXW5ZTcCHnm2OQMWbVVJeedATvcDgfABB7CNBBIcRIV1dXfo8pT548ec5i1gaK2bRaAF+bMkbeg0QwINNPbiWE8BJPYytj8q43rfiH+wkhNsD7Z9uUM2et0XPWhqGByPsdhytCnJsAvHAgSBI1165rbCkrCz35xrdedWDDhtUnAQC+8rWFbluePHnyXJrMyEAhInmm40dVSOCOPYP/986cFV+JFGdUNbbYvXhXsXfx0SKv/P+Oh73OuHGaHYhIv/rVny0Rlv32u//hu+9PJDL1iDNrz3zi8briK1cvOlxXX/rDDZevPrx/f3snZyP8wQd/k18x5cmTJ8/LMC0DNVGLhDxw/MvrDZ5ZavDEZtvRSxGmbwwIUMsth/olphyUiPLC5urPGZurAe6EO2fc6AldP/rRD/3z5nRKX55Kpq/QDavwUjBOlBIuS5IVCHmPud2uPllm+wI+98nlyxvC73vfzbMqPd/W1qY+9tgLxcIkRSk9O6tgD8YYakzmfp/bCvp9puxzmfX1jbF4/JS5bdu2vBLFHLF9+3a6cuVKqa9DrzOE7U+lskpFcShVXFGQe897bulaqHYhHpT7oUSig8PuKOZcRGSVhDPmFdxhFnfYkrJNHSytm3MhJZYnz8uBeFA+0tPvifOxRYaVkwEAqj1LIo7fFV0X2pY4c9x0V1AEACRK8E0O5i4byZx6/UwbxKicq/SuPEAFe/QNyz6360LUtZubm5kkSQogvDsWTaxtbenaMttzzTWSJNlunyv9xje97jdNG5Ycfsc7bvgDIQTv/pfZnQ8RSWtrq0eTtBVZ21jPkPrOFHicCYSCIwiYgmBKMBED7sQJSR/z+RpjkK+YO2ds3bqVulwuraur9UpwsIEIEURKOhXGBgFgwQwUQLWqZDIeXVbKqZMtNQULEEJrkFJNIlQBXfqlrXhjAJA3UHkuAtUqU4bKSA7fRAnxInDCCeyXdPsoACTOHPWyA93BgwfdHfDrTTYxPjiW67nGQaOQi5nlE1GqZiUit20svuODOSc78PpVH511Eu6JEycKt//jj6+LR9Pv6use2mKZts+ynUuisu1Vr1v7gKooh5hEH1vZtKS3tLQ0+/7335Sd7fm6u7u1++9/NvTQfbu/H4+lKzOZXAXCrGWZkIzHEAogwFEAdxzbCBUGhkNBf+SO9934W02hJ9734bedIoTMaqX3WgcRlXe846/XpaO5vxscjKwyDCsIgAwQLMKo/vFPvvUrSMXhv/mbDx+YxzZo+7p+scZ2zHU9qf1X6XY6mLMSBQ4YAQSUCWESASIRQigAkQkAAYKEoTLokoJP3Ljkb35cV2R1ErJx1q73PHmmYseOHay4uFjucv/si7Yw1medsdV/kppDvUCreWpp4ev2DDaoP7md3M5fdgUV1fY0Wqa5UrcTTTY3SgTYrpk2SqXuPkVyn65WN/dlnWxu5t36k5vxEx/98sZENLkulcit1nWzgC9sfhNqLiVLCY0wRseKigPPFQS8rV/86mdOAkDuQhUg+vvjPpWy4lQyuyqb1YO5nBmYo3b/EcuwCzKZXHzP7iMjum6EfvKjx4t//vOdR4qKQvpNNzXN2ri+Fuk73uehNi1NJDKrc1m9wjTtP06cCCVOV+fgWoFkZK6vOy7I/LuAKQnvD174yApN9q+UiLxGd1LrbDR8gjhBgcIDgAxx4pE8y3+BBNxInI5IpqM+akl9AJA3UHnmnKbbmqRcZ8RvhXONtjCW2twsfvHfTZ5tHMv1peLNvRQAXt5AmWB8wOF6U9zoXzPbRlV4lj9aG9y4t76+PjHbczQ3N0uWZUk9XcN3RyPJspGRWO1szzVXUEpEVVVJb1V1yUMf/8TbH75628bnCSH8S//+2Tk5fyISq+YcVgwPR+etr8lkpiiZzBQNDUaWeNxayut1pRnoHyNE6waAk/N13VcjQ4mxaiTYMNA/uvicPyKy5uZTN8Ecu/kmJm6UU7YKbGNF1o5vT5hDPgeNl9G+fCkOmh4EsShu9l9HdbofAGY1kcyT53y4U3Ev8UqLckPxBlsYlWf/3XDSS4bSrYVWIva3AOfZgzrRs7ucKLTi991fu8HhRtlsGiMRNe1TS3o54bspwYOzOQfA+Ev4yY996RpEuLyzo3+pbTnqbM81V1TXlB2qrCpp0w3j+y7NPUxkdQQA5jY6T5bhYlamMkzLbduOctc/fu+uktKCo//5tZ//nkjiic985n2pi9eKPNOlfWB/9TMdP6pui+55j8kzS7gwyy2hF4hpTDwnAwmxJebK2k6++nKeS4NJH+QduIMNd3eUkJxYZdqpGgFiRrMxAABAQEpZ2isXnhSc926ofdusXBvbt2+nX/vaLwqSiewK2xZXZrNGABauyi0SShxVkWMlxcHWFSvqDn/xK3++BwD4fAi6cs4JiunpGc7N9YTEuZDMhL1RVVW1u2sw6fK5jn7nOzvEpz51+wXpIyIi2bdvn/bjbz/hGYrE3eFUjHmYIvy+oLjhTVfEt25dYa1ateqClEReKyAiuffee2lv9mBdyoqucoR5nckzZbbQZ+0CZkTOUWApiUoR4bLzJVzyXBKcY6AQkSQh6f/16KffYDiZTyPg7EpSIHUASeuWsg//kwKFfbON2nO5KnyWoX+6u2voxt6ekStm1ZY5glLKPV5X/z/844e/TCT5mfe///UdX/q3Ty1kk+YFQgiJhONr7v3VU2vecfu1Dqng+wHgtxdyzubmZsk0lQ22RN7AUVzLOClEiRgOOmnO+VfHxsw2yLsUp0UzNEsrrljh29m7/S8dNK82RWZGEmOTUe5bsY+i9GiJ1fiTZcuezO895rkkOMdAfa/5TqnSs+g2BL7BFrkAIpLZrFcK3DXPaMy7D9y+kYpgxaxmxjt++vji0529DQ89sOvmeCxdPZtzzAWUUUdVZaOkNPRAYUGwRSK4N6OzyEK15wwFhYERRZH73G7tiZl8TnPJAQASNHVzzfBItDaXNUJTHbtn9+Ebjx3pLHju8edOWClrYNvt22a8knrqqX2le/d2lP38R4/8hWFYdbbt1DiWrRFGucQS1s9++NCH7/e5j+7bd/iHiProli35XJzzMdT6VDkF8noBdp2D5nknkIRQh4Jk+ZSidomqKUblJBBIA6IhuIhztEwOjkURDlEiepct0wyAuxDg7ovVnTx5puQlBgoRyb7+r0vhVPpqAFzycqXZpwQBiz2Lj4W08tb60OwCIxCR/Pj/flelm9aKgf7wxtmcYy4gBJBRamuaktqwYcXut95+4/7rrlt/aqHa82ICAW88VOBv+8LdH/3VTD4XHU2W9fQOVBx4vlVLpLIBPWf4ESff7Rodja/TdQvSWatOAIsCzLwUCnPkEOeidnQ4eqvDhSTES6sqZ7P6jaZhh0zTegzRlYB8Ls6UbN++nQpiFQoUVyMRpRxt7TyHcwLUolROB7XKNq9SNOqWCkZcqj+sSK5UQC4f4LbISqDmGirXthNC8F3wjYvWlzx5Xo6XDBRt4T+sYViz9NTYf713tidUmCfuYoHw2NjQf4fbintnc45HH21TjxxpK/q3f/nJ53I566bZtmUuqK+vOB0IuJ/56r/9+b+EU+HRbdvWX1CF37lEUSWDEIheccWqEzP86Jnjf/adb+54fTSc2Pjd//3NlPU9TMtu/OJXfvINn8f9KUR8ZqbyVPc/9PTrMhnjGst2Jh1MLcvRHC7qHv3d3vcC4H/DixL18ryUd9553dXHRh7c2pM6OPU7isABqLOq5Kbvu1yhAxvqb38oAIEUISS/t5TnFYUEcGbltE87OHjvWs6Nqy7khJRIQ361/DmZeTMQCs0qcODECzt9R2V2BWVSkRDGgoi+ai41FfB7Yoqq/kZWlOM8x1PwKlRcoAK6KaCob6h4ZCySaEync4vhrCAUx+FyPJYqrKgorHv4vt19ANC+MK197bJ9+3a6detWenjod69LO+H1Ux1HgDoSVY6qzNdMAJ4mwukPQMCAfOHLPK9AzqygaJAG3fHswCYHzTdfyAllqvWuLnvDY4LydNOmm2Y1YxtLZYLI6FaJkdKz3UEXC5/XnVi0pLJjcf2KH9305g8PrbmaXDIrp7nkk5+7/fSjjz7aU7+8svR737n/bZlMtgGRvGRSwB2uJBKZYkVVlpiONQzzZKAIYD6+eQq2bt1KVVWVY0bvTQ5aS6c6jgB13HLg+Zvr//5/asqaTo2vmj55MZuaJ8+cQQEAHmv/VsFQdvfHgcFlpkgXXcgJDSc1ItnBF9aW3TirAf3gwVNFra29y37zy6ffG4ulay6kLbOltra8raDI/8vrtm78aP3ytf1bt8KrWvrn5ptvthQl95stV6/+wR3vu/kblE7uwotFUxuffPKFrTM9/zVXr31h6dK6BxmjNiHn1v2SJGoxSgeuvKbpvitet3rOlRZeDZQ3+oKFNa6lBk9VWjwzaa0zAsRaU3LLfywpuuqBmrLE6bxLL88rHQkAwOKGbIt0LSL3I+Bstd5AImqWEClDdE/mrrvumtVkeO/u5gZJZotNy/Eiiovq3qOMOpRSHgh5d2qqevRNt78uXFFR4VyIsO0rBLz99tv1r33tp/0E2RH8ox7OS0mnskXDQ2MzTtoOFPnHXIOp7oKi0C7HtCpt7pQ7NlcIJYIx5rhc6jGf13M4WOjp13X1VblSvVCIaqm2bhcggDzZO8qInGNETnu1ooPM5gOE5BXq87zykQAAUsl+FRku4+hckNabWwqOApLY8uXL07M9x+BI9BpFkTcthGtPUSRDcyn6V7726X8zTZGqrKx8Tcm9XHfdDR0A2eGv/etPHQA8R60jFk1VZTP6jO/t9ddvGdyxY0fka9/6q3/92Y8feMNAf/i6eDRVqKiK6fO70zffctW3165fcvp1r7u8bW568uojmQp7mSxVECCTvhca88U0OTBwZf17HgEAAfCBi9zCPHnmHgkR6X/tf7fbyqWXO2DOSKX8bIJa5SkKdFYumra2NlUI4bv9rf90vZkzmy6kHbMAKaVOaWnBA1uuXP20202H4vHh15x7JB4/ZVZWbnUQcVKtjkw258vpNDhRjwtnsrK87bbb7BdeeKHZEqILEO8hFCVCAQWnnIM8mE7T/MrpPGTNMR/hpJYQIk0W7uCSA90l7oajMK5q8mpf8ed5jSDF412qi/m9WYz4EC5s1eKSgqMAbFarp97elCZJUJTN5MpMw5nUxz5fEEIcv9/TGQr5W978pmubGxsbX9V7TlOxdetWAeeJ9uLjOUwyjJuvGQ2CE4NmauLnJTz1zH/NsKWvPSySUtGhBYg4qdubUTnpU4pH88Ypz6sJyaBWUal3SW0k03bBAqzFntqTBORZraDC4ZFCIuhGSqj/Yrv3ZIUl/+mfP/IlDk7z667fcEkk4V6KIAJFJOyxxx6TMpmMA3BuwEOe+SFjRH2CQC0QmHQFRYkU82nl/Re/ZXnyzB/ScOp0MSCfk2g5l1rYKQMdm81nh4ZibsKxCgi5qGXby8uL2oMhb7uE4lkbpfjFvPYlypTaIbIsmYxR/Q1veIMN+byai0rKCnsEkErEySdvCDzh1oLDF7tdefLMJ5LJ036HO8Uvf+jLo9JAWKLyrFx8qWhGJUQUwhSSO/NFQYF/sLq29PQ73nvLrFQvXk20trZKADDlBEGSJVOWJX2myu2ISG6//V568OA9U6YwcC6s3t6HE/PlokJEdu+997LeXkNubx+SMpkEHR1NU8exCU/aZCiVIF4AoP4gFha6RQFTUC5SsbJysbN4cQnfsKHC3rBhw7yo1k8HHbMqERCCKaJsHeA5xjzJi92uFzO+N7mL7uuPyCLbLUWMHLPlFNWzY8RgDkmZBgUAULiEmltCjReg5PKJkFbOXRYTutJgZ5ZknNvgNnEpuion9l5J89BD6kDqJEMjx8bkFFWyFjFYbMr+yVZQFFd7eXHJViuyKyK2bt16Se4TjtcW28X29UdkMxVmCTsijekpqjCLJMwwtZhDAM7tn5urGJSLnUqlwU6lSsTGjXNXjVkayXRV5+zEygs5CQpEQMAKV8XxUKhhVpvdvV3DfiSiEYU4n7bYnKO6lQc/9udvfuKH9+TFMdvahhYxkBoJowzFueNwcVFwJBjy9p+aYcm9XbtApbSzjNh4fKpjVMp2AsA7ENGZayOAiOTQodZ6hRZWeJTIehlwFeOsWKOsKGsbPofZbhmxAGXZZNwyia1GDSZyskVSKjNazExqMJstO/j888c7ETE2U6mnuSCnj3mRTL2Cssx0QjK1BV1BdY0eL87arFTiysawoKs5wzLDsCtskL1gCzdzrGJGJIdSYROuxjh1crJjJoWjd3PFP1Ln8e01e1ztPdAzAgCXVNAMIpLh4cOFDlMCtmXcqIFalaWZRaphldpguoVFAhIXAQDBKJNy4MgpTq2czJ2oojlDIimNgJX8Q90q3xAAdCGifSkZKUQkXfFmv2QGqyQ+ermhsGqHW02ayoM2d9yyzApBOG5HWC5KaVpYoDuSmVZsLYpMiVLNfTKn4RF/UAwi4nEAEHPxHktJYyjkCHNWBQnPIFMtI1E1mwz1mSFomFX+RWQsogmgJfwi7T8pqpwtKyvqUWW5V5JE+GJc81IFEUlra6vna1+9d6Wpm9fCFBvx/qCnr7K6tGNWFzEAbNuZcnUmKJ2z+75jxw7W0NBAD+7r2rj3ucOVG1e/d7EQvIZJLODSlFLTtIs5Fy7LdtyO4yiCC8k0LZdtO4phWG5DNzTGmC3LzOzuHiwklKTvuefxyyzdCgOF+Be/+H/7vYrau+2m6weamsrntDRFW1ubCgUxNZUJLyaEE4DxemAHh35TmzRGGMLk1QVU2V0ZsU+vbu79XcnLXYNwZgsimxvqbmqH8YFkVgMlIpL26J7l7eG9lUPp9uUPt/9THSEkoFBPuQBeLIB7BNpeLrgCwCUHLbcARxBOBEdLAWBOjlIzaY6UACHZ9rE9y00nN8a5nXzg2JeOuORA94qK67or/ctjF3swP1Op+PDAww2x3HDZ/+59zyYHzGJEHlRlb50QwifQCTnC9gBwSQiucnRUBEE4dxQHDRcF6mTteFGCsEpCpOxp2N3AhZWyTmSjtQWXH3vq9LeGmgpff7SwcEmOEHLR89YOHjwo66GucsZE9X8/f8cm4ZiFQLFUZq5yBPALYZdwcFRElLmwXRwdGVFIJghmC8NrimxAJ/FCAkwP613VAuy1iJh6+LQ+UORp6Nx5+rtDy/xv2heNRu3Z1nqTcnYywNF+2Yf6fMiSltWYP3rg3v+262/fNquN80QyowKQIiHwohgoVZH1Zctq2xiSgY0bN85q3+xVBBFCeMLDsSWpVPYamKKObyjkG1q2oq5nNhfICYdwR0xpoJAIeTbnnYyGhgZqWZYEgOsFwnoAcf3YWKKc8+ldI5sF/4v+u+jMPzRNybo8agKE0KjEnhUiHYPx0uhzNnhyzhUjJ3yEwUpCKEUx7tJTmLcKUbCpdggZ08psri+TZe/LvssoMV0hcgr+VH5+xu/sxABOBOISIHQ9ANxqiexSjrY7B1Nv5YqJb8rmEyXpz7oyQWozIhmEkPsIkD3CEAnwQxwWZs+TgqB1FGE1EPio5egltsgFc07i/J9CG5zJ1w6bCVCHgGSC4PcLQY/kctiVTvdYsAA6n5ZlScBZBRLYiAL/zEarxLIzhWCffytegK0BwhT1wwmXmTtFUOwGCkfTmD5aWFiYA4DZGSjTTrsRhP/lD50aApQzqpizXZUjorSo8paAaVn1iGTWShYzgQvR+4GP3vgvAJ6OH/zyteveGxoaKv71PQ9X/Oc37/1lIpYuTqezhYgvHQYJAcEYs9PpzM4bX7/5qb/5u4Vq7dQgIvne9x5yqZJ4591fuOf6nu7hq2KxZDmM7xvQs/s0GwzD8hiG5f7fb9/3d4yRz33jaz+z/+kL//Vtl+ba//ef/9Djz/7h8Kyv0dbWphYWkpL727/8BT2avTbrjNW+9AikQKfenx1JnXz7aPrUW3GaAzkjktESeXg3gPyTRx999KGbb755WqkViMhaB/Ze8+sjf39D3Bh6fcoaWgYgJBTIYFaV4846PxGyA5Z8IvrU+wDxjoNDvxGNxVfd+1DrV/atrbzj19WB6uR8Szidijxz3eOnvr6+M/b8nxk8VcqF5UGco/6BkBAsqSP+3LsJkNsP8/vvqgyseuKx1m8cKbe3fWPt2rXmfK6mEJEcHvzdZkGclc92fuUfnWHLw9H0T/RvLq7AbJ4NDaaPv2ko3XILwd98NuiqOPCHju/vkeXyb5u6kCYU9qaFpMq+DKIds+3Zl4t2hOnS7WRBU8MNFHHHbFwGKKuKAwQM07RdczGYnI9QyDfsdmv9LpdvRIjsay7nacKlJw+0R0v/5jPf3jQ2llyWSmWKTMtyT/bdy4qcqSgvPO3xuke83tnluc0XiEiam5ulT3/8KytyGaN2dHTs2pHR+FJDN4M4vhqf62eJIKIkBBAEIe97ruUyiVHP/n1HtbfddlOSScw9m5Nm5VZXKslX2GhWOiJXAIAzW1ESoDORKRPIIWWONLikYE3FCk8FAHSf73hEJM+c/n7dUx3fKeuJHn2TJdIrHGGUAgoFAencv7HIEIACQYjmepYTkOjIqbtFhb9p57HeY5E1tWvmNOJ2x44dzLdqoMRBWHyg/9c3Gk620RK5QoGOCwGleRiRGCJSQpCmzJElJs/II3jibe1HS1u644e760PrEnN5sZ07d0qOr81zf8tdm7J2fJNAazlHOyDQUeepfxQBKQJ3606ytjdxwKJE7Y5pFamG4BYdpvDSnI0U0spjFs8OZ+xo/WxbYnE9YDuGt7CykcH4wm+mMxzhcimWqkgp204rnIt5XUXV1VW0B0P+k1dcsXZgPq9zCUMiEdtNVLZ8eHjs3aPh+FWJWGbKSE6PW4u9/o1XPs0J9CxatGhBI8XO5t5776UVFRUa53id6ThXHz7c/paLcV0hkIFA1nqs86ZgyNdUW1u2JRKJ/ViWZd9szjcmwn7G4Sqbmw2myM57ojqCkBPm8AqJqksVGZYgYs9UE8sz+zGC0bXCEZvC2fa/IASAUjKvE0lCgAAhEDMGNkpEXa5K/qsZYkL12McAzuNHnAVer1dyEBZTEO8KZzrfaQujcC7PPykECBIhpezRNdQeWxZQKxbZ3PyB7Gg5mOOaaD6fT0lrdjFy8ZGEPrg+a0cXz+X5p4QIWXcSS/RMYkmRq6E0Z8VbbZ57nJDp7TlLhe6a4aQRaQdo2zL7ViBFgjSrsobOzNExAJhR0AEhBN/55r+JIaVHDh44cSXXzTnbj5iMssrilkWLq0/CvfN5lflnsD9S53Zrnltf/5kZpQlsWv/+YiNn+NJpvYpzHhRCuKY6tra+/KTX63m+pqHiO4je6IW3eu44duxY6LvfeXjZ0aOPbY+OJRsN3Zz290AoEW6XmnF5XGlNVfSA35OwHEexLUdJJjMFhmG69Jw5LWOTSmaKTrZ2B06f6v0nzqfeZzsfipBREM4Judh7LYiIdMpoK0SUHzz9H1WZ7Ojn40bPOt1J1zE2TcOEgARkQ2VaWmJaTmXeGKBgAELSnUzQEZbL5JkgEELIy7jPOFqunB0rPxZ+6N/bYrtONg889F+qTPavKr3lgtTvEVEFAPXH+z/2X0Yq3ZCx4yu4mN59BwCgqOQkJuua5ElKzJUGIAIFV02e83FhuaZbHUIgl5PW0OKUFf6rX5/4qw+fGtzzCaBicFn5Nedd2b4cLdiiQA8U7At/7S+tlH6FbseaOE5eOHQyGMg5ShTTJfmiElN0RmXT4obX4abL4YbXxGwQYPKgqrOJGX0r40b/4oHEkes42MXTWbVJmhRM6yxzYUECEw8XQaswl00bMEMDBQBQUOLXKWHDU5V6mEs0TYkVlQZe8Um5lmm5gEBRPJZaO5PP6boRMk3bZZpW6OWODQZ9bYUh/+kPfOCWCAA4H/rQrJs7Z2zfvp3eeuut7Dv/+cDqwcHIukxaX2HoZqFp2lO61xRFMiRJyqmaGnYcOyk45hijY7IsZTVVNt0eLUUtS6aUyCzHAoqQPYJj0OVSggDEY1t2qWFa7skCLYRAZgmHgY0T0bAzX1hIRDIFgT5KpKhE1KyDpmfGJ5kRhGuSJ0yIEiFExCazD4hIHmn5t8WmE1+Wc6JNlsjVcDSnXN0RoA4hzFCoaxSBJxExxwUfo4RlGZV1mWpJBE5RcIlRyceRuylIIZm5AoQQN6AosdH0i0kG0HH3JacCRIUlDN4e3nOVVy4YOzHwpL2i6oZZTZx27NjB7m//UhW1od7kmdWWyJVyYQan7B+hDgDlGnP3CoG6IDwjBEQoYTqjcloCJUcIE5xaCkPJjcA1KqQyiSpuyiSXEE6lEI7LQevce0uACOQqASxB4KFjo49dLTH1yOHuw/Hf1f0udTe5e8Yh24go/fbkNwp5buwK08mu5cJsdNA6j/ElnBHJlJk2AgBZR9gJgjRBCM0xpsQlUCyJuUwuHA8SrnKgbpmqRUDALRHFz5EXo3A8Nk5u4AU6GiKoINBPprn6lopcteGsHZ2TJFXdSi9iTDfhT9FB02bl8kVJgXjqySdemPcS77JER2rKC1/xoeWW7WiW7WiZdG7eXELrVjU8fNNNVxwihMwqCmc+uPXWWxljzNPZPvCJdDp3WXg0Vv1ynwmF/JGiklDnm9667aHq2tKD1dWFQ+vXr+ycyq118OCgW1VzhccOd17e3tbd+Pxzx9/S3T20OH3e73r2Lq8ti94X7+lpfbSN7d1AiVSSNIemLEo4FzDCzGrfuj2MyQeWV7zuGJy1cjvj1tNF6l2myG2J6t0bXvacoOZckq9/WfG1v/PIpQcL5MreJZWXHYMpQtlbWloU8IOX06F1aSvcMJQ8fstI7nRTzk5MqWxDCDJb5Gq7Ei/8ZV1goyFQ0QDgD7P4CkhVVZXSlnzmeiD8vUl7dOVUOWYv7p8saZl1Jbf+RJF83aXuxSfrSjwnAZZYk/UPcTvt6bmtJEEGFwlm158KP/m+pDVakzJHlk11DQQhIwi5J3ngC16lZMfKEh67DW47fDfcPeP3r7mr2ZPLDa3O2aNfNJ1kzVSG4wwSUQy3FBytDay7r9BTf6pUXbFPaO6hhlBDaqr3JBzuKU9Yg2VJJ7y+I7bnDRlrrDFq9K2e6hqEAAE2/ddEkixXOGcme6b9ifOQcEYaiDXz1RMAQHlteRJt6xTnYt4T9NKp7HBxhXd0vq/zauA39+/+7BNPHej72Afvfra8vOjhd73/2u4LKadyoSAie/c7/natZfH3DQ2NXW7oxpQ5fJIiGYWFgRNrmhbvGR1NPK3INEwYHZEkmkI0zPMF83R1PWdedtllESKZzzJkh4Cxnes3rlhl2VbDiZaujxo502Na9pSu0Vng2LYSd0nu78qO66ECf81l47NMJAAA0VzPxqQZvglASJNFkwXUiqcKXTXHAeBl9wiFAEsAZBnKe1yaaxAm2TN+8PR/1MkOuSWcbb/J4Jkp9yuEQHTJvp5ST+MLOSvxKAAMUML6ORcp7vXpcJ48q3vvvde59dZb01qJ97DtjJ52CBwMueoWBVRelbPGPqE7qUJLZM/ZCxp3BxI6nDl5e0zvXdcZPjIg6TRSO4PAiR19X9MG4w//vZGLbco68ZUopgjhR+CMKKnq4Nrf2I5+xLAz7URgp6kbuterZQCWTJlwS8jdoq3tPXGQlVZURRcAngy5KspDrqrGsWzf+xyhV5o8PalbWhBH1Xnsmqc6v1q5Ir71LxOJ3sFgsHZa/ZtQvKA/PfgXnzJ4cn3aDtc6aE36rI6HvTO70r/qHgqsPWNGDtqcDAtGMhrhibJQn0nIoinfk0TCioVCmMkKKcwJbdaIt7Def8WWqN6zzeDpNZPdv5kgMe7K6UY8QYA6ADijSKCz0e1kMUE2q5IdBQVgcO4bRRTz6eJDQgDT2WzK5XJl5vE6rxoyGX0lAimNxdOQzRp9//nV35FHH330VCaTcW6//faLLhb7i1/sCnFB6pLJ7JWGYZZO5tajlHBKKdc0pTMY9B2/7sZNzxUUBJ594xuvSk03RHmibxwmcicQseeRR3Yne3pGhnq6B69ExEqgpMw0JnHXzIKJQc5saWk5ZQSNXrec0zkRlAAnAAD7zV8GCIlcjwiTzvJVyd+9KLTlBZV6Ii93LaZohrBlfcUUq5u+vr2ug4kny0xhbDacbJ0t9HMHGQQEQgQj0pBCPKfLvEue97PC3YW0OFxfv21ak8y7775b3H333QIAYhM/Az3hgyNxK1p6ZOi+LRytBoEOdYQZPNsoEwLEFkaDQOHujR1ajpRyRJyWVNbBwQfdicxgaMjuvtIWRoPN9dA5xgkBCWEOJWxUpupQdWD1Piqk5isa3n2aEDLtyN+JyggmjAc9DJ8a3FkkEdfwH3q/t4YA6hxNlaPjPnf1hswRVoWB6VDaiS8+MrqLwzQDQ/r796kpNRawRG6jw41Vjpi8jBIlzKTA4pTIkTLv0ueDcsWp9XW37ocZJG+/qH9pRBwaGmp2JXnO2T/y8wBHWxFoNwngskA+q71ZafHipvQ3nn1TWGOBsCWyQY7WrMJkAQDi2YHlQODkLD+eKCpyt1q2nSMExXzkQzFGuaxIxuFDnZHly5fH5vr8r1aymVzR3mePvSFY4N/g87k7Pvrnb/yIzwejMMeRVNMhHo283XHElSdbp3Y5+f2eWKjAF/v8Fz5yR2FZQXjTplUXXEZ+4oU9iYinr7++af+/fvkX786l9Vv3Pnv0OsQZJHa8DBMZ9xYA7H7x7/9j142LCTAOhE9arStjxjp8tPa5xuoLj0zVZbJGt+Lb+jNH3j3VMZTKJqOKfkXV+/4iqFW2ryy/uvVCrwsAUFeycRgAhh999NH3kZoTNwmKr2+JPPZhRHFutQUiZCR2aUdi9xcZyP8B8IFemEbCK0F5rco8q4cyLddNdQylkuVigUiFb9W/NpW+6dlFZRuOjf/ljln3DQBgWeW2MQAYO3LkiT/vlw6vtEnur/sSh6807HTF2ccicNVGXY1Z/X+VdsaeRMQvTsdw9NhtS6jDbkqag5sdYZROcRj61fIuFwv+7uryj/6kvjLWeaFVmCfalgOA3aOjo81R0u871P/TnyXN4dq0FVn0cp+fDAkAwK8U2pTIPQnDXsT57A1Uyh6tAkFCiEhmmgu1a9cucdddd5klpQUjhmFHErH0VF/srJEVyQiFvFHG2CWlgzV7UFBKhaLIM8rlQkCCHKll2+pM9k1yGd1nW3b9Z//8P/+qtLzwgRMnTuxbsWLFRYnsa2trUwFA/egH/v2mRDw16f4MISC8PnfC43U/VVpWtMvg5mB5uX+uqyKjqqoZt6Lu5i7RX1lVUp1O5wqSicwFqbFcCpxRh/h58+duTTuRqfeckNoK8+wr0Kr2yFQ6xq25n6hkMhnHTfAopSRW5KpvyNmJuqwdPee+IwopY41VBrSKtS8M/HYAzrMfNdE/5acHPrHJBmtq4wSyLhO1I6hW/FgG9/Oyps55OsratYo52sl60JL/zysVOwrxNKWskeWTHZvQBxdrsm/oxOBTTUeGn2hrKr9pSnmtsbE2/0Od31hqicwtHO1JV04SUbOMylmPVPR1TfadJrYYveuuXXOqf9nf329COQiX7P2OwT1bEeGNWSda+3L7fOe0FQCgwFVh20IMZ6xIuXkBThvDyRQRAC/MoqDdmeX+9Vs/HstkcvH5MFASpY7H484SIi2IIvVcQykVTKKmokiJmXxOIBBBBbMs20MIUAQghBIG4yneBMXkYaOWZbscx1Hi8fStbrfW2dY23D4hnjrvxj4cDiuc88DQQLjJtp3yyY4hhAqf1x0NBX2HPn/Xnz28fv2yOW/bxPmMgwcPnrQsq/3fvrTjYzgYgVQyUzzfCeYXAQrQLmXt6GWO0CffyEdARqScS/Kf2FT1gUeGTmX6Lt929ZwrH0y4WHsRse+R1q8ejeQ6aNaOLTlbzR0BqSWyBQCiwbKya+H8ARM0AT2ujBNrtLh52VQHMZAzElH7ttZ+/CGJ20PlwVVzqrcIAEDINgcRIwDwh98c+fw6U2T8aWt0KY7vOb7kOTJ4uowQVquDuQSE6AeAKdsT02P+nJ2qzvGx9YiTp49QKmUU5h67qvDPHjYMlq2vn/s95QlFcxsRn/j5oc95JXCtytqxKhhP0J32eyIBACwre0NCWNY9kWyHHwBmnbDrCD2gSb6SvnBL/cGDB/tmI7v+trdf+0jz/tZoX/fUkS6zJZsz/N1dQ+6S8pD/0UcfVacr73KpsmRpzXGv1/3MQ49/87Mz/eyZKK2TJ08GUynL39ExcNULz7WsGx6KrH5+b8s2MYWREgJZPJosRRSf+8oXf/r+mprqa44cGc7NtWjq2TzxyNGNQOCNlmOX2Pa5YciEAGeMRP/3R3/3dkr5yPr1y192L+ZCOPMCHj58+I6/+MS331VUHPzHWDRVwvnFLbY5lxwdfHSRELAxZY+u5cKadIJICDWua/jcJxhILUvLL5tSnX6uIIQgIv7DLw5/5qYK70o1nGtb7wjrnJVBXB+4oXno3qsQ8TswvodyzlR7b+c9hYLC+wHwMpMnp5wALy583f9bFLqqubpkZfscd+clTEx2nJaWlm8cTf/ktwG1qj5nx8qsSRK1bW4ub+7/9T8Big4AmDItqCOz79Mu1bU+nZ1k3wkBEanjUQq/d1PdZ39VV3Hhru+XgxCS6+7uvjfLso883fuFXQ6a1bbQg9P9vAQAwOIpy/G62zTJewqB1GSs8KxDXCmRyzviu7ekPdkwAMzYQMkaOeFwx1NcHOxPJjJFlu3MZaQUQUTWuKimVFGCRQAwOIfnfkUx8eJjLhfQ3e6o4NxpIYREEbGlsqZ0UM8aDXrOWJvTTe8ZwdIXY+imBwXCz3704I0AcAIADs9ne1uOdRUCweWCTy4mXFgU7AqFvB2cGxFJUufarTclwWDQqKwu6Sko9P8hEc+8ifML07VcSIZSpwoAyHJAnHRDW2HuqEzcESDkhOGY8zoBOAuhyf5BAPYEZmAxInjOTuwV6MiAAO3h52qEYydhkkF8MNGpUVks52hPKusmMzXulkKDQLCbKvyiRfmuXLmSn9jvTgfkst8bPLUNBJxjoARaqm4nioNKVVF39+Fgff25UkiISH7a/KlG3U5PGtlKCDOCWsUhTQ52OmR2hWVnQ11dndPf368HXZXPZsyxNbbQr5zuZyUAgMbGm00AOHnfsc+3+jivvBADxYhUmXWSWxUFHgeAGS8d/+zP3tHy+EP7WE1teW+b2eeeSwOFOG6gissLym0bSuE1bKAAACbqteQmfuIwYWT+8IcDp3/w3d9dd6K1q84wbBcHPomBsjymYbkyGf0WMT5UzJuBQkSyce0dxSBg1VQ+7Jqasrb1GxsPbNq0ad5nhS+mvr7e+M1vft8pBHns+JGO62wbXrEGKudECoSAVQiTV7XWJH/Er5R0rqu66djFbBchBHsTx/ocgQ91jO19DyCWAXnp3qkArgjBFdvGegKsDyYxUDof1Ligq7iwJ01QV6gnVuZdfsQEo2NFyTUXrbYWIYT39e1N5hR8+Kmu/6wDgHMS7wVw1RDpEllyFRNCQnCWFNKZ/cOkMbLCQWPS0HVGmLGoYPOzwHnb4vKmi5YHOiF+6xzqf+gPJyNPibQ9Om0D9ZKBp1i78rcBUrNdBlecgqzPpjEZe6zxVHTnHUS4trSPNs9Y74kQIt753lvbb3/v6z/DJHpQkqU5d8PlskbTkeaTq+b6vK8W/H6y/8qmFd9+09uvvHbRkqonyyuKeiY7DhHoY4/ufevxo+03PPnkC5t37GiZVSjp+UBEsnfvgSZVVRtHR2OVk7keEREj0djvL9+y/Mdzff3pIMQNXcXF0m/9QU9nIHBpyUFNF0T0DKdOL+pLHLpWTJEzo0m+p5cXbfsuIQQvdpBRTWB1oi8UO1ntX7mr2NNwcKrjehP7bu1JHTinAOvQUFuxogTrIrmOdRafPNnaEc7JusCV324Ibbjo5XeqqzcbztjgHoX6DhS4ao9OdZwsK1f22M1Xn/37tv59FZ1jh9bpPFFhObng2X9HjuhwO14gL/0fF1nXMsfNnxYGFj6SNEZ2u1hgmCCblnftJQZKGgtmvFAa9ipFB2Sqzmp1gSgkgY4WzfZvOBl+bPmEZZ8RK1YUW42N1UMlxcGTxUWBOQlffTGJeLp0cCA8J2XuX41s3LjRvvyGpZnbbts64ve59qgu5YCqyDql5/r1ucNVx3Iqn3n64LoXXnhszjUU77rrLjI2kiyVGfNPZpwoo3Yg6AtLVBprbKxeEPmq228nfOvWrWZRcXDA63O9IhVKBqLHQuPyQ44Lzg72QEAKzELhjLrV0p6FaB8hBLeRbY5XLuxXJM+UY1PGiVVkzOg5LrwcjwYVohWMKzWc67KWiZqmRIp5aekwVFRc9IrJhBBctep2y6MEw16pYEr9PVtYRVkzds7YZThJb9qIlQGiBOTcMVdmroQm+cI+pzoe5MEF2XvfXL3ZkIk34VEKeill02rDS27Uli1bdGttQezyqnf/1KcVX5DLJmONvT2s91wPAHSmRmrVqlXWpk2rRm5/9/VP3/D6zQ9fSDsmIzqWrO/pHql9+SNfu2zcuNFetWpV5qv/+cn/K68o+rk/6IlLbPJZj8P5kpMnu97a2RmdtgjldFm5ciUZHU0skhU2aUa6okjG0qU1p4sK/aONjY2pub7+dCGE4KZNq49XV5e2LVQbLgTd0atkyV2IRMjnKFUQIhjTsmkr3resdPOpBWoiAADU+Ne3eKTQlG1ImpFFKXvkHIHWLMuVy8xbNdXnXFJoVKHa0OLKVQMbycyDu+aKmkBTb5V/9YGp/m5YmcqUFT6nH2kSKzDsyKLJjBMAgE8r7i9w13Y0NjamZlvd9kIhhGBVYGW0wr/6IKPytIQSzplJbIWtnDPnCZfk3VnmXvIcATqrm5WyRuoNO75hX/dv3ra387ezWq0ECnzPZdLZ3y5ZWnM0EHj5DPnp0ts7vLi9rXcRImoTsiB5pmB4eDjRtHJJy81v3PJNl1vtmeyYeDRVeuTQ6Y1FPrXw4MGDs86jm4qxWLKIC5z0vBJjet2iilO19dULZpzOUFNb0qW41P6FbsdsyDnpIoLypHkzjEhmQCnv8KrFcViAyq8vxqMWdZtOrm+qvxtWojhnJc5R98gZ0SASHpzqc36toi2gVQ0vdH6kWyka9UglUxpgm+eCupMMnv17i6fdWSdZDDh5XqNL9vcXuqo657CpsyLgrUoFlLJTADitLaRzBmdCCG6ouDXKqK/LJRceAiAWATLjvCGBtssWZulI7vTGlN0R2ok7Zxx+e8cdb0xmLTFUXBQ8IslSmJDJiwzPFNO03abl+Pbvbw22t7fPa2mPVzrbtm1zlq6tja9bv+wwYyzKJllFOQ5Xdd30+4O+opGR9JwGCbS2thJdNz1iisgyIMQpCPniRYXeBRezDRR4U5SQV6SEFueWh5LJgyOAEKFJ3oTCvJOKol5MqPCkHbSmDL6yheF2HEs922vjgKNx4Uw5edKYO+lRffOaKjEd/EowxyRXYqq/O2BptjDO2SO0HUtxuOWZTGUEAIARKasw74JP4lTHbbvkwLQnOpMaDUIIto217SOGeWIgdfTNHJ0SBHvG7huL67Vdsec+FtSqnrsh+a4wzFAahxAiEDF+9OjJf/nIe7/417IkLbImyYGZKSiQqbIUiMfjqxMJehRmUR7ktcRtt90UB4Cnv/TPP/qAL+BuTMTOEbgkiIQUloXW5XIOBYA5jaRLxDNF3OGTat4RACcU9EcBYcFz2goL/XEhxIIPArPBwEwRAJl0BUWAOG7JHyWUzLuQ88sRN4xk2hqb8jvWnUyIAvMAgISIzhmDapipoEAnONXnNNkbk4m24AZKJsEsAz5loI3lZIMOMYJn/153Eh4AKCIAk84gKJFTmuxPzF1LZ4dKPCZldAwRp2WgpnRvpXpSepKY0erAmnsCasmu2TWHMy4sj8zkG48P/vqNszsH8EyGDK/dsOyJzVc3/Reh1JmLlRQhxH3iaPeqU0fbZ1UB9bXExEuOS5ZUd1ZXl02ptZhL5QrD4eich1mPX3/qmbsgSDhzFlzFQQYZ2BQuFgBAl6bqqqIs2P7G+aBIBJmh+stCEIIQEEGnvNcUAAlFBICXRBpKEhHwCuifTnSiKOdz6hAEoJOU9qCI53lHCMDci5vOBvd4W6bSkqDAbJmq+p/+PwUbN260N1ZuzC0KXfmCVylqoSDFAIgDM7jJ498klwU6KwwnsbYFW5SZ7vkQQvCqq5an33DLVafeetvWZxRFCjNJSl+4kULX0GC4rj8c9+3YMb2KkK9lCCFYVV0aLSkOTpnAaJq2N5fW5zKxGgAAGKPORM7WpE3jXDDHmXrQuligbTFCpnqnCCiKbKiqsqB7OFNBKOWC4JTfsUDBuCMW/DvWZZ0xSZpyDCFABUV2Tj8EgiAEpxZyI4ISNvOI47nGQygxuT3ldgglhDPCzumHxJhgwKZ8thAF5UIs+DhHCSVCOIxMIQtGKXUkKhvlNZsQ4DwG6gwbat/00NqyW75906K/uVOh7g4QdMYv2GimbVt34uBblVFj/dGRvdMqgXw2t912Xevtt9/44Pd/ctd71zYt/oHHraXPM2i9LNmsUfrQQ8++9/SJnqalS9sn1XbL81LKKwvHgkH/lAmMmaRePBY+dwP3Qli5ciUWFQdHJZlOureDAHI0kiiNhxNzHkE4U4bGUkXAaHCyvxECWFQcHC0qCV2Se1QuKTBKACZ3nSFKWTtelubxOQ+AmSl+PxR41aIpK0G71EBEk33pieTQP+LRAjGJaVO6zrJmqjRjJiZVmLiY6FbSD1yfUoZJlXwxtxw6pxKDSwpm3EpwFKdYQAiwg7qIzWrsnUusXEIzMF0KhE66TGRUybiUgj9Ogqe1mslk7QQSeiygVvzMq5b8loGcA5heXZ0zCOShPX3f/UDb6KPrO4aPzFr5WZZFR2HI/3R1bel/eX3uQVVTZuU3FgKpqVvuxFjyun+96//ehohSPqLv/DBGBBCccgXNUVDEuZ9lez2eFMHJa/AIIZSentGa7p6RBR88+3tHyk3dnOLZJuj1ulI+t7Lge2WToVBXSghn8u8YuZy2whU5I+LduXPmwU5zSSw7XKYwecrxQ2HulCy7ztkrk9CdQ0GmHCvSVrgqbg4VziZvcy4Zs4ZDSXN0ygrREpVzMnOd0w9Zcpkyc6UITP5+6na2JJEbXfCJeNQedcdzQzWAeG75FACgwEyVulINRgUCTBEkcTZXNN6cAoBU50jzQ8cij412x/ZdjygkAXwmS0Z/xoq8WWHudiZoD8wyMOGaay7vf+GFEzlCrL5PfvTfb8ymdfdsisYhIrVsRzNNfkU8kQkCwPdgPLLkVaF0Pl+cL4oLAYkzDy+426NmCZ285LzgQolHk+WAOOeuxZkSiyZLbJtPWRLe49aygLDg0YaTQUHNCsQpDJSQDDtVAiB5dF1nsICh5g7PFIGYPCcOAECmriyBc79jWXLrlLEpNRp1J1lGCAvOUTNnjWVn/Ig4ZZVoRlRdkVznhGhTolmM0gwQwMnWUI4wQjknseAlYQw97gIG5UBg0hUUJcySqCvbPPH/Gc2GGkrXH49z7FgbunHPHwb+9/8ZPH1Nxo7UTeezCFzSnUT5aCa3/YHOz3+6Y6j5HbIMw7XFG4Zm0gYAgE2bVkQRMfYv//6Xb/7Fjx+4sqd3+At9vcMNhn6uyvHLMTAwuigSiZf89We+/nUQ4jdwfrn+1zQjQ2NFqWRmypenIOgdKSo91/1wIdx2223iueda92WzD0yqD2kYlvfo0bZN9XXljc3NJ1s3bFg+4+fpQjmjDL92+btuME1r0po+ACg2rVu2lws6ZQ7PQnJ6cLglY0U3UVCyCJYLX+xdIUgdMH1l3rq1NQ3yEAA8vlDtbBt77rqcHZ+yVEaFf+VeguQcJYZCrDhxNNmvcY5IKSFnh7Jk7WiNSw42DiVOruvDvpM1pGZWUm8XAiKS/9v/4SaB+LapjvEpBS1l/uXnSCEVeZf0yTbYKEBMtrsT0weXEzKi9vaerIjHzWRTU9NFj1hERPbNZ99WjSjeYgtz0okcpayvItC4L7fSEgDTdPGdgRCCMAy2Q6WYJKu7ZeZ60CX5hyUyfTebQK46wgo8M/Ddt+4b+NXlp/v2ViJun7FrjRCC1dU1aU2TOhRVuS8U9LcGQt7ZhDcTx+Hq4eZTawYGIit+/qMH57zMx6uFnu7h4uGRsXMqf55BUqSs23Xu7O5CkSQ+Bggxr1dLThocg0BUl9bw5GN7zxHZvBjc+39PhO655+HllmUFLcuabC8MEYArmtblVeVLspJzBVTYHhZMeJXCHoDJ95ktbtR1pp9fvxBusL19e13HRvaVpqyRmpwdm3KS5JYD7W7mO0dLjzHLAMCUWw4OMypNupIiBIpOhv9w2emTD1x0d/HBg9+Vj/c9Ve8Is8LgySn3ijjigCLc5xRQVBhmUShhmWlJSs7VUSWEEALE1ZF7ZmM8cHhBZN4O99671CcX1HE03Qji3DEfQVjciFJF6boNWqfv4nsxE3VwIifx5G96e57ZNxI5siFpDdc5zvTcbAK4KoArsVzvX3Ct4ldEgjjA1lGAu2fsWlu+vDi9c+fO4y6Xq/Mb//G7YDyWwmS8Y8qHdyo45+qpU71XyorUA4ylAGBB5VwuRRCRXL72PdW2w6cs3ay6lGQo5J/TmdlEWZBBQmGksCgQyeUsD+K5D7eiSmsikYQDAI/N5fWnQ5oaZdSCzbZpF5mGfc7gRgggIeA0rq047vf7L/rMfDps3LjRvu/I5yNAaGvWidZyYZ2TtGvx3KqY3u8DgK8g4nndvXNNAVM8BLE2bYaXcbSmlCkrd686Qmx2jlZfeXlT9oeH7oyF5IquuN7faPLMuUZIQFVMH3g9R3wCAC6q6K9UWadQTlchOg26HZ9yEugIo71SW3aOnFZDaEMKQpBSen1RR+iSye2XuLwJAZCI5DEhc6PIiQQA9Mx5J14GIfAyl+xdGTGMSVN7ECnP2slhLClvIXD39KL4pmIZLMtW1YW6igI17y91L/pGja/p0cm9n5NCOFieuNH/jofav/jDvV3DN50a3Dmrlcu2bdv4pk2bMqUVvn+rqS7+3LbrL7uvsDDQO5tztZ3uv/mf7/r+F5977tiy556bfSDHq42HH94TeuyxPa/TdXvJ2Njkhd4QEdMJ/YWGyql10mYLIQQ3v25155bXNT3CGJ10n+TE8a4tv/vt7tv27Dm09mLeuxMnThT+8qcPX/mtb/zqr0zbmTS6rLKyuGP9+qV7T5w4kayurl7wZNepKAus66n0rX4EESZdYWStaPVYrmfdocEHbm/u/91FqwaAiHLz8D0bXhj84XaAyfdnJKpmNOYP+4navKRGm1RuqiawMVXtX/+ITCcv4a47qYqe5KEbvErw2iMDT66byz6cj+7ubu3k6M7K5/p/9HnDyWyc7BiJqKmgWt2qm5nuysqxcyJpzyjM1wc3Pu5XSyYth+II09c68sQdw8kTWzuG91+0+zc4eNDd0XGkZN/Qjo+PZDsmzYclQK0K3/I9Je7FHU3QlAICs1tB/fGE4yoP9spGGHjg+JeOcrAllxxssIURcrhRDFPmg4yDgBSB+wGFpyv+/NXD1B9o7v19CiMFkRlW4sWJWfbYv/zD/8FIPPpsIOjjQoh4NqMv40JI061yatuOj3PHc88PHtzCJHpyopw5h1dAgt98sWPHDvbsUwdCBncusx2nUEzyXcqypCuqnDP0XNxXNj9yMSUlBWF04BiTWI4LoZ7dDtt2XEKIwh98/4GrPZrafOTIkex8+tkRke7atYv++7/+YnMmY67KpHPlKCYvpqiocl9JWdHRiTLmlywq8SRVWelQqBp1BHgcfKlXBEHIQtjujujzW2Ti4oeGnhlZV3712HyupBCRPH7yq6st0FfpVnIJgpg0+ksi2ohbCfaXla3VYYr3FSFgeFR2ggALUyLrAl+6ykAQEqIljeV6N1hcx87Og10NDRuyZ4eszyFk+/bt5FD8B0sdnllhOOkajs6kqwvKpIRHKTgKHJKEbJuyPR61oIXkaCEBZiNy6SUpsQSow82gKTLLm4d+d9Xg4MGuiooNNiFk3pLHEVF64NgXqw2hL7dErpKLSdQ8EAAI2D6l+BAijrw4feiCQkYnHkwLEZ8GgD/s7vqh1B3bf/lopv0mQKFMnS/8x5YxAcgGU8f/yqsW7mlkVzpQPPIkzFASaaItHABGEfGb99779N54PLX8v//zV/+Szei+XM6cllqEEEISAuDo0dP/z+VSfxmPx08gYnqh9ccWkkAgoB0/+UxDbCz9UduyKyc7xh/wxurqyrt7hqJjq1atmpc8n3e+c1t7NpsdvOdHj/wNIaDpZ91TQghBBO+B51v/say84H85lyKI2Dlf927Xrl2Ky+VS+vsiXzB0uyKbNSZV0EBEVBT5+Y9+4tb7/u/H/zQfTZkzNtS+fgQARg8M/vK0wdNSyhpdcvYxCKh0Rfd/POSqDCwrvDbR3Ny8C2ZROXs6nCnCpzv6J7iwV03WnjP41ZIDa8ve+OT5ciOf/Wlr+qabbnoSgG1zSf4VWTtaM9lx0VzXB1LGyKr1ZW870hVv7gKA5IX35ly2b99ONm3aJMfx9+90wN6q8+TU0Xsg9W0se9tPbYeGAb455TlLF2156MSBnW6JaW+2ec4P8FIRAsIIMXjm5uFc61U2ff8T/f2tSQCYx33RuCdlj1xr8tydjjDLEMQ50XsoEIFArqnsTT8Tgg4D3P3Hv81J3s8ZKRyk9Od+pfBfy1zLPlTmW/ZwUCufXmEsgixnJZqe6vqvL/Skjr/9YPcDV1xIW7xe7ynLMp4sKQp+aHXT4i9f/bp1O5jEjOmqT4wMxyrTKf3av/nMt/72L//s68GFzo1YCBCRIqLyo+8//ed61vzoyMhYlWVNrseoasqpjVes+PU11zTN2/5KXV2dZRhG+nXXbfhFTV3ZrinaTNLJbHB4MPq2T9357//x4IPPrti379iUSY+zARFpW1tb8Q/+54m3f/mffv5vPV1DS2Ox1KSbzooqp6/YvOqRyprig7adXXAl6ZfjzHtc5lv1U00KTF3mhggpbUe2Pdn19bt5Sdd1s3XPnw9EdD3Y+pVt9x+76x96U803JoyhSaMjCVA7oFaeIoTso8B+f75z3n333WLz5s1mrW/tU+W+lT+c6jgHbc0U2RWPdvzLvx0ZePiW9uE95xRAvFBasMW78Q5tdarsqS/GjL6bY3rviqmOLdBqDwZcFfsQrYOra5zzVinPQS5V4Vt2pM5/2Y8YkROTHcPBdFsiW/R4zz9/bc/Y9943ED7RiLMQ8z4fkchJX2/vsxU/Pfj5r6bNyB1Jc3jRVNWwg+7K5qrAmsc8oHQaUeklbZ6zRk083D3Dw0cilqT2HRr99WIwIcXMqBsACxGEJpBPujwHAoSjE3KcdDBlj26kWUqfaftBZxmUpybK0c+Im2++IgUA6SeeeCK5f3+/Yecs53DzyaUOpyEEUmiZlgtxauNsmrbLMKyaSCR+RTZoNfz5B+8aQMQIAIjXwmqqpaVF+Ye/+FZgMBkpScQyl+s5c8Vkm/8AAJqmpDVNHli/sbGFMX3e8mMmZsbi+9+//8jYSNyvacNbTct240uLGBLH4YppWrWZVK7oycefXedS1d5vfnOH0LR44mMf+5gz2/uHiOSee37v/ta37nW3Hm1fFYkkNxqGdaWumwGcRLaFMWqripxqbKxpJpQOXHXVVecdWC4VCCF4MrL/RFzvKZaIK8LRDCAI5aXHABHCKjPRKRpNn96YlAbdDx3+UnpVsDJaV/dBe8KbMSvasE2NtXeovzvy+QYd9XWIuMVysuWTzbzJuD6R4ZGDJ4DQnqbqW162TDshRBwf2tWVtgdpb/KFOBfcJfBsAWpkiDxoOJnLUtZoy8noPtzZ8p0oAGQiK0v028nsXbWIB+X29rDr6IlfLTLtzCqH5660RK7GFsY5KhbjVSQo96qFJ2Tqal9RdcPLBm5sJBvt/b2/GeGaONCfan4jcuEW4LzUlYlCQhDMdHKbCEnkjkQeGe6LF2efH7snvanwvZkLUehB3MGOJGTfgf6HagySLTN5ZosjzGJHmN6z3xICRBBCbZfk7yx01R4tLT3X+zLnWeHl5U1ZAMgCwBf7EnsL9CxduX/455/MWrG1CWtwihyR8SgTQggZSB25c4x19Kwve1tRVIrcj4hts3zg8aabbsoCwDMA8MzBg6ce+cVPHt7S3Tn4vqNH2zcaxvlzpqLRZHU0mqy+7IqV/5aTpGdPnjz5rVwul4J5cmdcSiAq1eFk/Pqh3sidHaf7l0+lIE8I4GVbVj5HCTx7yy1bd18M4/1nf/aWR5996mD6is2rV+x/oXVLLjeJsnPO9Ok50/e7+3b/sKq65MDtVcUPuQuqf7Zr164xAJhxkMKZPCeFwgYrq6/as6v5nw3ddJuWPWVycGFRYNTrc7e+7yM3fEtRlOxXvvaZmV52wVhefPnpnae+S8p8S79/PPzoHYaTrjv7GAQhIxHyicjTX3TLhW0NgU1/GLTk79K+470wCxc9wPj33BZ9vkFSREM42vsfOSdVZPL0lCHXFCSDgTq0pfKj2zW3MjzdgXVV+TWnfj/yH32Lglc/OJJpbUqYw+ekJyAIyRa54HDqxGcj6Y7E+op3fFdRlaeWwJJmAEjMtn8nhv9QAR6tKdrX9Q+6k643+TmVAf4Io0pOJu5UoVb7rVpyZS/Al6d1nctq3t4NAL1dsRe26U583ZjeNVneGNF5okJ3Eu9K5AZuW1N2y78HEyWHoBAeR0RjNkYKEVlf8lm/yMRvGcqdvC1lhq+0MDtl4johkulXS3tkSb3v9cs/+3uAz51zzLzKlhjhoqwtx9sJg+9psre6TF6+LW2OrrecXL0Nk4caAgBYwig6Fn78bSrTqtvC+zpah5p/I2fseGPjFRdQykAeBgHPEgIjK9cs2pZOZhcPDkS2GYbl5pxPKR/ccbpvuaxK3o+8/6uhqzavvu/5nUc7r9i2dtIooFciE/JO0h8eP1C/9+Dx6rHRaNW73/75GzjnNUJgjTPFd6Mqki6rsl5RXngPQXryIq4shaa62iXK/7eoKKhls/qyaDQ5aVguCsHGwvHFv/jp4293HGeJL+AZ+NLd3zvSUFfVU1tVGtty7foBmGRVjIikubnZ5ThywZGDJxv+9rPfLH1u79F1tmU12javyOUML+d80neHMWq73Fo2FPT9uqQsdEBRlOyRI0cuSYHY86LnRqjPdX9ArSjXpExTwhicMqrN4pnSntT+rbZtFh1hDww+2vrVgz6tsqdYqxij2cruI0eOOJMFiLRgixIakvwj5FRd2hwt/smBTzblnEQjB7PCcvRygc7kHhcEBKTcqxU95FNKD8oWHcyVTZ7bNBmEEPzuwe9alWriJ4rkDYdIFY0bgyvO3q+ZOJYIcDynxp6+WYCzAgfuH/n9qW8+7VYDkSJl1bBqpXsOHIjYk/UPEWlPT2tJTOosMa1MyQ8OfvQK29EruTAXm062XsDkAREAAIzIOZm6ni/Uqh9ntntg2Jee9t7uRNCYUBX/rxyud3jl4iLdSZRynNQLQpEI0pF47o0EyMb9I/dvq/Gtat7d/sPhCv+yTmRF4SWFSyZdVSEi6Qm3lqadSDBh9df9+MAnVusiVcmFtc5ysnVnB9m8GJloacbULp9S8h2Zuo8BwKTbA/NqoBobG00AGEHE0db+J0I5R8eWyMNeLhyfIywVQTAAOOehEOh4M3Z4A4XiAllWG9N6334ucXi07ZvmG5b8xayKpm3cuCgJAElEbL/33qft5/YcHovGkqs550WI6BbiXBcCAEA8ni5XFDkIIVKZzOROt7f3mDu27wi3wm3O3XfPfik8FwiO1HEc+YYb3jtjqScYBRh0TPKWt3xWqq2tV9evbWjIJjJrDMNamUpm3sY5V6ZygxICKCtyxu3WYp/86Fv3ZJxM+uvfvuDuTIuJl29kaGjo6Ts//K9vUBIsEI+nSnGi3sCLj0UEmsuZJblcpMTrdy/SXGpfNqu7RiNRzTDNgf/835+l072Os2LFbaJSUtFyTBIBgCVL3kvf+c51gcWLl1TGk/ranK4v5ty5ORpNlp1PrYQQQCYxy+vRxqorS577i7972/MT78Arjm3rPpdAxOYHW758TLfj7qQxvApAMJxk39oRZiBjmQECtJ4gHXG45bV55lDUGOkbHNyVsMvD5nd23mb7QyoCAKTiJsnKJjn2/APuupIlJcis5ZZt1AvgbzB4epHFM+dPJCWEE8IyAa3iwOVld+yqrVgz4xXbnRvvtBHx2R3H/l8ZF86ipDmyBJEThJfqcY4rTqCSscNrKJEbGUimLQxTd6SeBBlxd8UOpBLlYf3s/mmySX585INsqfdNFZaTWgTo1KPgb7WFXpKzY1OWnodx8wuUKkmF+k5cXvHBx1JDIraxfmZl6Cfek+fvPfoFm1NxsyWyXsEd7ez+TQSykawVbSKEmTL1rLeF7TMdvT1thHncPI5PnfwG+87O22wAAH9IxTP371svvIFcVvjRCqRmuY25dUic6zk366cKPjnTPwIEJabGZerqubrmzseg0BUjZHIps4u++d/dvVPTdcczxLr+uif+/BXRXO8WpGLySp4TIEdR7G14pirYdLiBLLkLYLF5oS8+IrIXXnjB89iDh941Ohq7/KEHdn8QkVA4z3dCKXCPxz34qb9457cZVR7/xGfeduJC/LUvx/33/2FDX/foin/78o9+OtnfFUUyXC41U15ZPKMVHQpBOecsmzF8qWQ2YJiWi/Pz34MzEEKEx62mGxZXfOOfv/Lx+y6/vOllA2F27kTt61//Unnz3j1dUx1DCTzVH3nijQBwvtIaL+HgwYOBH3//iVVtpwf+s6dnuCGTzk3pTpgEpJRwt0fNaJqaCwR8Cct2FMuy1fhYsmgiPWFG1ZYLC/yj/oB33zf++7P/6HZLPXMZ0fgfu278mAD4+jkyRBO4pZK/e33t53/RWD23q3tElB45/o0aCxNfHswcvzxrxxtm8nnOEWVJzcpUNdySf4wjZwKFZDjpAoGOKmZYCJWCZKjM13Jd/ae+CDLdv6p02wUVx2xpaVEcx5GPOz/6ZdYOL0qYw1MGK0wGchSUyKYmeVIS86QoJdzhpsviWb+DtgthZgVWGcg5RpTcm5bd9RamSIP1oXU9M+rQ2e1DlE/D6cALzd/8Z8vOXh01+2aW/4TACVCuyf4oo6ouEcWwRc5rc8Ntcd0HMJ1o7T/BiJxTmT9a41v/l+tKbzhUW3b5lGMCwDyvoCajpwccn0/XwS/+IBFXn0sKHWGStM3mepFupyoInaSzBEjGitb1xpvVLv7CJ3xKYefRgaeP25WBro1kZjOLM9x11134nve8xwSghwgjY2UVhabMpHpCaUVf78gqACBnryAQgZimHfjtb/5wvdfncj3//OFlfX19j4TDYWeGuVtzgsOFZJimOzwan5l6BgoQCNSxHNW0HU1Ms06M5lIyiirHykoKHggVBQ8oysJWIk6n06awxQCj9MelpYXXhEK+xv6+0enKHRFEpJbpaJwjc2wucyGY4Mi4ENJ0vxMAAM2lpoIh35hbVe73eNwtE9/LJSkKOwsEgBYHwn7rkUsiCvOuiOv92xCAkGkMTIQAIHLFESbNOakiBEEQgAqwVYTp5ScCADAqGxLRMgpxPaYyb6sgtI0CXPAE4MSJE3zFihXAON2hUt+KkEuKJozhdUI43ilLT74YAgRAyDYaHs4diQiKAh2Jo63CDPpHCHVckn+EgXyAgXKKOKQflCnKn8yAe+FecSVcmWNUekJlrv6gVvn2rBmvsTE3Lbmj8cmQAJsbXgdtzQLqIDqKEI4MBNhMMkTdUkEPJXKHRNXdCOw0aNrLrnwvuoHatm2bA+NqyE92x7sPEMMMHYr8IhjN9S3XrWQ54LmPPaGEGDxVZ/BUnUcqrObg7CYEnfIh6IdZBi3cfffd4u677zYB4ODBgwePfvTjbz51/45d18bj6Y0D/eHliMjwLOV6RKCWZQdOn+69adHiqrJA0Hs6k8nsLCkpyc22HReC4EIyuZBMI3lRtMM8blfGH/D0f/U/Pv0jqmr9TU3LztE8u5hs27bN2L59e/8t73jj/+1+qt1MJjPZGRioifvpaGA55+RVzQSvx5VcvLiqY+2aJT+96dZre5uaFs1L3sxCMLGajSPib57tujdhY3bghb57XgcE6WR7NmdDKSEIXOHIFc6tWT+nFCTTJQcitf7Lf70sdHVrffmFrSzOMLF3xBHxl7tO/WAdMs6bh+5v5Gh7zpWUPRdCCUEQkoOmF9CcsVj1H88D1PEqpQN+tfDxa6s+8nhBwaI5ERWeiDjMIeJjz3T86lDa7K/p5Qc1256egZoYjZmDhg8mC1WbgQ8u5Krskonn2TUl7/+f5ZXLk9NJgF7Q2i51wbokAKROj/o+pXhX+Gr8VxUJzNycscPLhtInbzRFpuDsbO+cE6vIObHbHuv41zdXelc8ed/x7QevKX/PTwsLIULI7Nx+GzdutHfs2HGaqpEu1ev90cc/8davZA1rJRf8isce2XtbNqMX6NmXDmDdXYOrenuGl55o7VlRXVvywO7dBx4cHe1uvtTVAmaDz+eObLpizV63S/luVXnhscu2rB2BS6Qsyd133y0AwPz0p795T2lVyW///gsf3vn0k89fNzQ0dtXQQLh+shDwuUDV5Jymqvrb33Xjt2VGjwyOxnYtWRnIbNjQcEl8L3MNIQQPHvzurlyla+9VtR87NJg6tC1nxa+PGJ3rp8pvueBrAnUACV9cdPXPNcl1IOCufrCkJhitg6Y5nwwSQvjOnduPaItWtl5R8f5nYkb3mpHsqQ+lrXCNg7OfvLzMVTkDNVfhX/ZogVZ71Kb8+5Dx5UKhhjmXwyKEWIjbB39/1PvXa8reuE5wZ+nxyBOft3g2YImpI+0uEFSZL+pXiw/WhjbusW3jR3YumVxeuVyfbhzBghqoM4mBAJBFRLu1v9WK6M2HDCcVJkRKuSV/DSIUCuD1tpML2mh5x2duoAByJWWNNeacJPld25fTxb6GQ/t7fz58Wc0d3S8697Q5M5MCAOjs7Bx+4okDUnwsh4oiM+KjpQGfr17X9VrLdnx6zvQJgQyR02xOrxjqj6z/6pd+xDdf02T9z9d2RD7+l7cNzUVUm6pKOiEiTQicWcxdtD1DRZWzXq87DghtHq82oKnqfl+Ru+vaW9aekX+6pPj2tz9jfve73xUFBaUnFJcqybIcLi0tvNy2nULTsstzWT0gxMvP+M+HIkuGJDMjEPR1CiEGOOejoULfAVVVev/pnz+ams9IRkZclkxJwhCOCi8Wy0VASmWTEmp4mWteAzI2brzTRtzO20bf2DWSafUwJhtuOTSGghcLEFWmkykUKOTpuP6mggB1CFDbrQS6uXBGOHdGFKY9oxBP55U1744BwKyCpKbDtm13OwDgtPTt7M6JMU6zUoEmB5Yh2qWOsBstbngFOq5puf6mgBDqUGCWxrx9QOiYzXmHRLUX3JKv63VLPpKA8ajSeZnkEHK3AIBs89DD/cjBZkz+rUo95SpqNRY3Gjk6bkfMfhUIMJGbRpWcTNRRiSkx7jiHJKK2uViglUnL469fvtWcyf1bUAP1YiaiOGIA8NRE3sk9p4afW5c2Iot6ks/fMZrpWGFbYx5gf3o8UubwSgCyjIJ8QxCqfygQDwBAH4zP7mf9EC9aNB7xBwAtiPjIffc9WZNO6q+7b8fT74iMxhf350Z9AON7UulktiCTytw0NBS+ccuW9bbt4c0AMHwh1z9Debkv2dcpj44bhHOj1OYTv88dW7V28bFrr9n4P2vWLu64/Kq1pwEA/v3fL1YLZs6dd95pA8BBRDwEAPSXP3v8tmd3H1p/6nTv9R3tA8uFcC7IQLl9Wjrg94XveM/rf6Uo7PlNVzUePqP396lPzUUPpsbvLssQxEFTzxS+eO+GUMpl4koRStLl5UvmvcbP+CB3dxcAdCHig22RvVd3RQ+si2a7bx3OntoghOGHabjGpoIR2ZComm4svPpxibj21stXPvfjH98bvvvuvxcA8/wlT7CqZlsHInYCwK5jo7suz+aGl56OPnNnwhiqy1lJjbHZ948CsxTqTdSGLnsyoJUfXdvw1t8GIJAZ18P7sznsxdRsqLilFwB6EbH5WP+jyx3Cm44OP3Rn1opXXaiBAqDcxQKRIk/dnprA6qPu5OrvS5Jkr2pYNas92UvGQL2YM3H8WdROmEzupIwcCEhVxX6lKuh1+d+cNEYXpczwGoMniwGQCrRdPbH97xpIHLnx2OjTbyz1NDx2euDZo42VVx6dg9mW5XY7fdks/x1R2O6ayqKCy7es3DDQH96cTetLWo53XjER/Yc/+uGDnwwEfT3PPnPk1v/65i9/tmHTir4rrph9VBXnPFygQOYdt1/32VMne7bEYqlNRs5044WupAhBxgh3udSs5tKyqiobgaA37HJrgz6va7i/e/CAoDTJCR3jEh/L2rELmplXVrZjedDhhYWBKSOuGKVzpgc2IWSMSPnjnOEznMIPmtYvKg/4/EWhwsCyRDSxyDCtUCZjhgzDdNuWrWWyekCSJUuWJcvrdScUWTI0l5IJhXzdTJLCuqG3xEaSI/FUJsU0ZcwWPLd27dqLVjrDJxY9q0kwSDz072yu1+SsZLkquRMSUQZKPUu/Ral0DGaRhHwhEEKwZXTnIWrapwShjxR5qosU6i7wKuXLLZ5dxIVVZNrpYg6Wy0FHM51MiALjBChXmStBqWJIkprRmHeQESVKKTuW1kcGU85IjIIaJbKSjUaN7IQb96JyxrtzZPiJ4yBJbVRm+7xQHPS4SrxlWv3llqOXOmhWmTxbyNHWbG56bWF4EQSVQDYlqmYZlQ2ZuRKK5I4o1D1mc+uA6WRiCWtwWJJpXFOpHoBAChbOXc6zkO3wo3+QIb7g0Qq8QSgv8mnFK4XAUtNJNTrC8glhuwyeCTpoaVxwVWZahlHJlIiSG7+PatIl+XttYZ+0uB5J6r19EpfTyFGfeEdmPQZfkgYK4I8PSG7iJz48PDwqRNLVnnuu1HT00awVT6nM3YCAPgAI2dwIcM79ssixeG4gfpQ/6nlu5Kf0gZbtqdrCLam2PcnobbfdNmOpoonjTQAwETHW3Nw8FIsZ4ne/fRYiw9GIpqmMMeqnjPizGaNYyuSk2FhCevrpg937njte/qH3bPevXNcY3rp1aW7jxo3TTiYEGN8b27lzZ/b1tVUHxsYSJKcbNufCfcGPMwWkjAm3R8t6PK6c2+0ySsoLxkpLQkP1iytGP/CR6w+Xl5fnKisrc7/+9QVeCwBSqZSgHjAUWd4zZZMYaYHxB3lO3DcT9y0+8QOHDx8eGRzMFCSjmVTryY5IOpkLSGPJYDbD3KZhqpbj+BVVtlVFsgMBb0LTFNPnd2XrGqp6Cop8Y2vWLDlJaUF0w4aKP/rP53vV9GKaQm+JG4ZhZsXPnwcg/YzlSmWmJRXmHlpZcOtRXYLYfKY8TMWq0m0ZGI+mCyPi4GjmuD+aCqeHMp1jJk8VUMIKLaG7KDc0G6wgo4wTInGZeZMyU0xF8WUCasmwSvyx+sCGVneRMhKChnl1l86EpvKbzijjxPbiXlcplCqJ3tMkZQ4V5+xYPyVSgc11jRDqRpt7BSCVqGoqxJ2TZc3QJH9So/5o0FUaLfYsPYScJJeUr3uRAvwHFqxvE23QJ35ibW2PqkI0+DKurpwlEsVjud6o7WS9Djc1jk4QBFUJNRWZqVmGiqXKrpyLBVKa7EkGtNp+l1bYFqSl0bqSlaN/6t/7L6yNF9rJheCM9EzLyK6rx7KdyyKZjpv6U8c2W062mFAy4Z8nvNi96LBfLXt+UWjzPipXPrC2bK0xl/snO3bsYEvrVi9+5Il9V4yNxa944L5d77Zs28Wd8Zwin88d2XL12meWLqv51bU3bDx++eXjbrI8efLkyfPyvCINFMC4kTo9tKtwNN3uG850lKbtcC0QKPbIwSbDydTaaBZlrXg5pTRJkKYYoa1uuah3SeGVR11Syb4SujJRU1NzQS4aRCStra2eh+9tLhhLxAqe2X1giT/gKy0sDjUkxpJrc7oVSqfSIcviI5TRsc1b1uwuKy8+fOtbr2y7/PLVkxZVy5MnT54847xiDdTZ9PYeC6VJtDBtDV09qncszdjxyqFU6+UAoAGg5pJCKa9S0FUZXLU/pSee1M3UaLG7LOL3V+ubq4vt8xUBmy47d+70xuNOBeew/OnHX7iqv2+0trWlax0AeFRVca7ZuuF5t0t7LlTkbRkcHT6qqgXWBz5wpb5x40YHXsNFEfPkyZNnMl41BmoyEFE7NfhcLRJeO5A5dl3MGKxL6AOrM2a0XGFabFHBlicCrOLh6sDqU7Vla84ruTEbduxAVlwMrnhk54ZoLN5w4PmTbzh+vH3F6Gi05robLn80VOh7/l133PB7IYz2hVCiyJMnT55LmVe7gZL6ks/6MjnL35durUmaQ754bqCIcFHuVoJylX8dWiJt2o5p22hE/Wppb7l7xciKqms65mKTdlwVG6Te3l2l0ehY4OBzp+tOt/cUx2LJ0Dveeb3qOI5jWbbtmHzU7dFG3/7OK1sdx4nnjVWePHnyXMJRfHPBhJTGmUiu3jO/z2S6ywYTg2UJJ3xZJhNZZ/FsMWWKSYC+wCS5FQA6EJFcqJGa+LwNAAMTP62IqACA9Lv7nnrD8ZbuxeHh2DqPR8sCQpvj0GEYj4jKG6g8efK85nlVr6Cmy0RUoHRi4Pk6iZIylI0yEHJMQs+oSxR3VVRUmPOpnrBz504tmxWlhMurZYXZFDBXUulv8/l8yfr6+oua25InT548lwqv6hXUdDmTGCwzO4FU4wQxzSnPWeCkF5VVXIwABgdASTkA3YwAdwTYlmUZ2Wz2VanrlidPnjzTIb+CehkmKs7ixUwcnFjRMZiQbLpUkhbz5MmTJ0+eM0YqT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkeYVDAAC2b//vEirIJ9vbBhYlE+mSsw9ijDqKppgbNyzfWVpV1Pb+99/yFACIV4tG3I4dLcqiarFs377jqxOpTMPbbr/6vwOBgF5ZWZlb6LblmT2ISD95579cw23x3sVLKk+6XFrbpz93x4ML3a5LHURkP/7x49WOY27bs6v5ylzm/7f35uFZVdf++Npnfuc585wQMgGBMCMKRRFwqNqCWlvt4FCnarXetre9BVpra9XaVqlDrVWvODCKyiRiIjMkgQCZyDy+Sd55fs+49+8PCN+AAbHX7/Xe76+f53mfJ8/JPnuvvc8+a629piM6aZZWnU7za7954od77XZ7+Kum8b+CZ59+/WpFJZM62/onUgi9/9dXfvHh/yu87IuCEML5/X7h5Re3fF8QuNisOROPy7K+ZeHCithXTRvAmWrmra2DPK1pZcPDgexYPOHgBf7cTzxgAggBqYkclRmWytm0fjdnsTuPEkKG/29+huK/C7U7tvKHjdTc/n5PeTyWzDPZjHsAqAEA6PyqafvvwMqVK6mbb77L9p9/35DuHvCn3njr1UeKiuZJFRVI/qpp+y+C6ugYdCiSUoEQqDqd8D/ipfsy8dJLdWx2djS1uvpYin8kbJw1b9XBu+8GDSH0T1fCv/1b/36ZmNCKREm+PJlM5hOCdCazLiaKii4apagvk/6vAh1tg2mKhovb2/oqEKIOfdX0fJV48+VNDo3isg/uOzGDYRixvbXHTGFuEE5/l+4rBwMA0NXSocOYmhUMxeySKBksNqNvbCNVwawsyoKiqhWCIMRKy/PmECXxGwAIAEDyqyD8y0TTsNfAEOVb3V1DBX5fKHP2ZZOPE4QOwP9PBNSCBQsoNSnmaRpaiAHP5zh4BOO+AAD8bxdQTFdbf1oyKc1kaZrSGfjIV03Ql43UVFEADU0GFeYiisopLoajTU0gwz/57Agh6Nabfvpdrzcwue1U3zSjSQgJOj5BU063TkhyXu8w/SVP4b8dnR2DuaqqVp1q6Z0GCHZ81fR8lQjGxGwA8YoTxzuu5VgaB0OpVQSTTwDA/VXTBnDe96B4lpGAkCQQesHY63qDnk1Ns/ImE3ooHk+WNDV2VU6rKrn+j0+97gKAN/87Cf6/gSuuuCxOo/B6g7F1hmckUDqpvPAjTMHgV03Xfxd6enqYNtE7/eixlrldnYMLrlw8sxRjtRNOf4n4X/gfjMOH6/SMxly+f++JKzwjgdw77+lMj8flAAD4v2hfmzd/mr1p/e6Shob2eQzL6KZWlXwqS+rzkpQ4hTEWOYX3RqND/yM063/hy8GkiUV9SazWlJblXmXQ6+KTpxUfplns/fTAK181aQBwnoBCCBGKotTmjvXNY6+vW0forCzgXnr+V4dVTdU0VauIRuOFp5r7/p/QSFNSLIrRqG/ubBuAeDzpd6alDCqK9L/azv5FEAgYEE+rRlmUTWJSMmMCOkI07qum61/4fKgRicYsNkuiZEkmRQtFSRzP8//UKae3d8hCY1woSYoVAKJpGc5jOqO+8bnnHm0fNeW/vmX1l0n+v/AVI81qjqscM2wy6g+aLPpETnZqIycz/2N875f0Rd0VK5AGAElCyItXLbhnptVqvHJw0DN1oN+TRgj59//tDsbvfW+hCAC7z/zg/W1/+krp+Rf+ha8C7S2d6UBgLgARNE1ruu/BG1+maa3//wU/878wPkovK40CQBQAVgIAvPrGV0vP+fiin3xXBZpNOF224SG3NzuREE0AgAghMCqkDh06ZAYQHO+s/XhRLBSz+UNhC40ozPOsVFZZ3G3k2IYrrprUW1lZGb/QIOvWVRstFrao+uP68nAwkjo8ErCzDK0xNINnz6o4yQl8X8XU9FO7du2Kr169Gv+f+9bRlZWVhp07G8rj8UR2Q11rqaaplKpqdEa6y2ezmt2LFs1sBs7VsXBh/tlAkLq6OjaRYPJ3bN1bHvLF8r5/74pXHQ5Kys/PF8+nrbGxkQuHpfQdWw9WBgOx3MHBkbNRjxOL8/pMZn33jcuXHi0tzQyN92If+OBApoSwa8MHe68wGHTN3/7u1+r2VLfOGhgcSe1s7y+QJZllGVpNy3L5snJS6q66akpPVVXV59qDd+78NN/jDqXW7Dl6eSImCqKosDzPqS6n1VNanjPI6fTVZrOcWLFixTk07djxaXY0KqXWHmjKVVXNAgDQ3zdcHI+bhS0bq3VWp6k3JcUQKy0tjY69jxBC1dfX08dqe65qa+1PGxwcyZYkmWEYWtPr9eLUqolHiovS3UuuX9j6ebRfCIQQtH49UKBsv+xoQ3vWYJ83L5FICBRDYYET5KnTJzakZTrct966tOFSlCSaoqjq6mqh9eRIVTgUzzx2rK1M01SKEIIKCrMGzRZT6zduXnry3Xf/Fhy7r8aj6733anIVRc3aumXPZbIsc6IoczzLK2aLLjxt+sROXk/V5uW5fAsXLlTPXzcAoB790TO3m4x6sXJaQY9C+BMrViy8oOnsid+8ejPLUoTnGZViuY8eeGBFjBCCtm3bO6G7daCgtq45TVE1HSCKajrRNoXnmNCWjdUBvdnUkptrFouLi6WLzQUA0LYt+6dt/2hf6VC/J51gwrAcZ2xu7i8XBDb1ww/3RtPSHG6ARHj69OmJMffBu2u3zT3VMpDR0dFfnEwmeQAAnufUoqLsjuy8jKEf3P31PfA5Eb91dXVsfb3boojSvKaTbTmBYMQhyzIjsJzMC7yyaOmMfWaeHbp++dWdn/ecG/Y3pOz45GiR1+uv7Ov1pBCEKYZhtZKy3Lb0VIf77vuWH7p28YO0ql64D0IIeuutrVaOEioO7D9eEgnHHIFQyMizrMKynLroqmm1iOX6q6ryOsvLy5XxaDp8uNkxPDxi27Xz8LJIKGaIRuMGAJrYbIZwfkHGSHqWafeiRXMC5/OY/TsbUkRGtq19fdsNNru5+dt3XHP0+PH24lMt3emtzb2liiyzHEvLJeUFfWmZ9hMFBTm+fR/XLjYY+BM333FV44QJE6IXWqOXXnpfT1HK5QAMgKbCXT/8xo66ujq2qqqKffCHT95mMetjCxbPbbTZoHP0OY9FW1sbr2kat+mdfdcNDfvtg25fKgAGhqKwTtBJFZVFRyZPLRpYsmTeBd/5Het22DXOWLB126czYlHRFo3F9BzDqTzHyPMXTG3gGbbtO3de3z3KO7+QgEII4euW/EjVM3QCY0CyonJwOlSdAAD87ndrbVu2HE7HMsoP+kNzJUl2qopm0RAmhIDoHvCmqYok19efQtXV1Z0AoJ7/Aj///DpjZ2dXihgXJ/s8wRliUsnEGrHLGGMVyaSnf1hHNGI53tAoF5WVt69bt05esWKFRgihnv7J08LBPZ35hGKmYAwTZFmZgjGhCCZUKBTzK7LWXV1dT7O0Fn3yyVcCP/3pnVEAgGg0SofDKDMWTk4OhaOVsqyu8/sZAADxfNree2uvJSYnSr3e6ExJVIpVRRsVUMjrC3YHAhH7mj+9Ecsvzm1ft25dfMWKFecEkYyEg3YNQ14oFJsfj8aFV1/aHmQYriociWUpilKiqhqLMdZCwahHESV1nTfM7dzZEA6H25QVK1ac4/gmhKBVq9azIyO91n2fNhWLkpgfDScuVxSN11SNFUHGoUh8sKdzuKev39sj4aS3rq7OV1VVpSKEyMqVhDq496/ZiqQVDw56M2VZMQEA9PUP5wUDEZ13JGDILkhRvf06L5zWskbHpe/51ipbDIE5J802IxSOZKqKlkcI0KqKsShKUk/ngOoPBM2PPPK0T1HY6HPPPXRBJjkeCCHUbbf93kIrIVNuUfY0nydYkEwmi1VN4xHGGGtJtbfHzfo9gc4Va3d57r57ZTA9HcQLCRaMMaVqWP/KK7tz052OyYqsFCqqWqmpGoMxRn5/pC8UjunWrHlLml08q6mxsVGsqKgYZ71X0bfe+m8peVlZxRzLTIzHxMs1VeWwprEiljUqCoGezmGbLxAObdu4jyOEuFetWoXH0EX19/ezwUB4tqKqMV8gymLwt8FFoqb83uB0hmUww9GKRsinhJBETU0PV3+wqSgUjpb4/RGnoqoCAkK1NPeUMDQd4zg6kl+c7tU0fRAALrj29fX1DACwtbUnpwR94cJgMOrABCggxNh0snMixaAMgeUimRkpDDByFwAkCCHUPSt+ZoqrxJRXnF3p84fyE/HkZA1rLBAAVZPwsDfoSCpK74oVP+lxss5QdXV19Px3feXKldR1111HP/XUW2l61pDhcNlnRmLxQklSUoiq0SKWFUXV1NbGnhgBYl63ZU985cqV/lWrVn1GKKxb18iJ4iD7xtodxfGENFlS1cskWUkHRBABUHwjIWsimuh96Id/cBMNjBiTC0Yjrlr1ik0TxUyapqeGw7HKZEJMwRoxylhRVVXT2tr6sayopt27D8rz5uX0EULUUXrWrVtHB4Ng3LxuV56s4sxYJDFPkhQDEKQnQCCZlEPDQ/7hvt7hvj17mgbq6ur6PvjgA210f0TFhFlU5IxoOH6FqmL9jvf2RBOSPDUUiGQTQqYQjHlVAzkUiHaazfqImlSQ1x++TFKMUmNjx8jatWtjcIYfn7d3qWeeeUvv8wSq9HqdKgisAgA7UlJSGLfbrY+EorM1goOhUDAqeYQBAEiMuRetX39QeP7pTa5YMuYQ9PrZsWjSpWlqOsEYaYjCqhpXe7vdWjweM77/fl2fyRSVxz5vQgi6555VjupDp7J5HTclHhNny7LsBIJ0GlY1SSZyV8cgI0sa2nX7KpkQMoAQwl/0BAViUqUQIjwhGCFAeOxiYFV8qO5gy6zGE51XUxRgQRDiKan2YVlWeVmS+YMHTl6t0/N36PRc8E7y9W8hDfUDQN/Y/rFKbjjVPDD7o23772dYRuI4RszKcvXH4qJBEhXdoYONXxN0XNxk0octVtsNl122uAsA/F1dXab2YKLs2NG2tQF/xCUmZX1mlquHpmmVYWj1aH3rHKxhmhCgl10/76VCXeYhAHgNAKCmpkdgKGXR4SMnr+rvHZl5+51L/0oI6gOAc/xQiYR0Q++wd/bWLXvvJQQQRSGck5varWmYwphQR+tOzUMICMPQ8jdv5lblZEyqA4BPxvaxt7alDBH4WvXHtd/geXaZzsA/Gg7G7BzHig6nxUswoWRZ5fz+1ssRIjfRDBOde/nUuzjO3gQA5/gGAYCOB90llKo8tmn9JwtCwUgmTdOy1Wb0m0yGSCgcs4tJaUYyIRkzsly3WSzGGpfL9XhPT4+bECLX1ID+jpu3PqhqygoAdPaF3fb+/jtH/168ZNbatAzXAQD4KwBAdXU109LS4nL7Qw9EIonra3YerLBYjN7UNOewwSBEk0lRH/SHXfv3Hb9KEPjgjcuvWE8L2usAUHepe2zdunV0U1OTRUn47w3FpWt2v/z+HJZlJJ5jRKfLNiLLChcOxeyHDzZ+jee5+OTJRUelOH76qquu3rN69eroeH3GEkmzJCtXeL3BRYdGGtI0jOnMTFe/JMqCLGtcfV3r5TRDrWBZRp74aNbdgz3mFgBoGNvHwYMHBQCbS4pFX9u+9UCh1xPM4QUmodPrYjarMRgJx62iKOtqqo9+w5li+4HFrG89fvzUXbfccotvlK7W1ladLNOWXTuP3GRzWOLxmJiNCNkPAL5xyAYAgK0f7v8OxzJY0HFJRJRX9l97pazX45w3Xt/+y0RCnDO27do3tv/H6N/33PfNXySi5noA2HmhvuNxnEbTdOrLL25+CQDO+q5CoWjJG3//4HEAAEHHRy6/fOpugsgaQsgn4XDYEgXqlkgs/u3XX906EyEAlmNEp8MyAghBOByzHa1ruYwQgvLyM36guuAluz1zEwAMjB17+fLlei1BZw72BJ+MRPpn+DzhDJ2ejwkCm7RaTYFIJGGOxeKWA/tPLLY7LO5JkwtPJMOWx+B0dO05yiPL+iayLFe4ecuetaqKGU3FnMNpGeI4RhYETjxW2zqbEExlZaffhbFGK4p2Qd4X9gcf7O1xzzx8sHmZTs9HBYFPulwWTzgUtySSovHA/pOLrTaTJyPTOdDmSv0mnI54kwAA3G7VyQB8e/dHh24eGvZPNRj1UZvN7HU4rD5VVdn+Hnfe0JAv12IxrTCZdEcAuEeWL18+sHr16hgAQGNLe6Gs4pn79x1fatDr5jWd7LwjGAg7BR0fz8pK6VNVjZEU1drRVlcxY2ZZUKfXGbdvO3hb8cScTHuKpRCg/NcwTgRnU1OTtfl464RdO2t/lZnp6krPcA4AwB+7uz1WhCCnpvrodVa7KWyx6DkaU00wJkBq/fr1rMWSM6f5VPdtfb0jN8WiCYvBIEQcLqsHAUGJhKj3esIZAGQRL3ADM2dMui8e504CQC/AWasBDQr9eH19y+Tmxq45TqdlyGDURR1OqzccEg3JpKTfu6dhmSvF3peR4XS/9cJbyxoaGqJfSEBt2VJdtOHd3WV1h5uzjUZdyGo39wEAef/9Qykfflhjf/w/Xr1a0TRTaqqjnxeYTTRFDxEEQxRFaINBZ0zPdFUOD/urkkkp64nf/uO7LMNuP5NLdXZBP9q6b3osIU4ymQ0BhqU2sCzTjBB4EQIWUYipmFJ4RSIuZSYTySKT2WBV1aQRAPyHD58q4DmuNBSIOlxOa6PFauoNBMPbAQEGBNhuN2eyLFvEMvQ8TcXGoWG/41LnXVdXp4/H1dRf/fyVhYm4OMVut4wIAreP13Ftmqa2EQCEKAQTJuZOicXiE6KR+Nx9e09cXV/b6ujs7KwPBoOJ6dOnK+f3y9C0ohOEuCnH8CZg8GDAQ5gAMhp5Q3p64eS+vuH5oihlv/j8hm8yLIMaGxs7xmr1L6/ZUBUMhaY1HG2bYTLpwiazoV+RxS0UQ4cJQTGGYXQZGaY8g0E3sadnaJ6mauW/+tnL38YM89obb6zqN5lAysxL3Qia2mXQ6+cMDfkLgsFIbllFwRZCSECWJK/RbDnI641nlYgdOw4bpAR1UygcmRIKRB2TJhW+qmHo1TStA4DIFAUcx3GG7OyUbxCAtE8+rr88Ly+jbu+uOs/8q6b3nb8G46G+vstYe2jwhqGhwIxQMJJbVpZXI8lqWywaP0khCFMMzer0giEz27VQwySjo3NgQn5BxoKd7x0TAGDjeH0GfGGnTi/EXSm2ESbd+ZGiaAOEUAMIEMPQFFsxZcJ874h/YigYqdi88ZNv6Hhhz7ZtpGXpUpBHteNd209UBgJSeWd7/wSdXohMKM45HI5EN9A0FSeEilIMo3O69KkFhcaqQbd3ij8QyfvTU2/fSlHadkLIJZkhLwWCEBcFQRjKzk15TRLVWpqm5w8P+3IScdFcUVHwn7KqJVRFTvAGpobhqaGL9YWxPsgwqpSbn/F7gnERwaTS7fYWsBzrLizK3C7LapxlqKjVYWoiFNN5zz0vMylO9TrvsH/28HAgv7Aoq1bTtK5gOFGLaBRGCBFe4PUZ6a4qoFCue9AzjaKouWuee5cBgGdhjEL71G/XZ8mqclsoGJugqSpMmly0ORpNNMYTyQFCqAQnMAYTbTBkZ5luUlTV3NzcXWY2G6946qm1VgDYD3BaMz948KCw+pdrZ6mKuhgAwGo1NWdkuo4FApFaIDhJCKW6UmyZDE2n8hyzwOdLOOPxhPn8tTjjImBuW7G6EjDkZ2S5OgiGLUCgHSGI0gwtMCzLl08uWqYqqkWWJIfdyBi6uroEAJDq6lqdr7783oSjtc03UCzDZmanNqqq8g+GpaMAJAoAlMNhTbU5zEWDA57rFUXN+PtL79+IMLUeADrOp4dhadloFCIsS/0nQpQXAEYAKEQQ0ABIj4FuiYYSosNlHUwmJUf1rtr58xeV6V966SVyzz33nMNvtn9QV8EwzDSMMc0LfHt+YfYl5X8RQpif//x5U0Ptp9/xeUMVqqoyEybm/hUIGZYVpZcQjHR6QZ+Tq8uKxRJLWZYx7dtzfCYBagTOCKh//OO9TKKQgoajp6oommbKy/M/TojSTgDsIYgkCCCWYVn9pMlF1waD0Zy+vqG8gZAy37+n5di4AmrUvjyKVatWIQAASZJzeI7NCwWjKc4JmSfSUh1uhBB5//1qGwCd29c3PNNqM3mzsl19y66Zv3H+wmldVVWlbkII+vjjj82RCBp85vdvpsVi8cLhIf8SQeC7AGAnIeTskX1gwDMRISgwGvVRR4r1o+dfeGhXcXFxZJSut97aLu7Yun92a3NPrlGn04NMdAAAUiKZQdFUTjwumkvL8rqvXjJ33/0P3/L66BxaWwedL/z5zcs83lA6IYSPRZLGS3lAAADBoKajaZzhHvBOVWSlNDs3vaNoQuan9zxwQ/Xs2dPOnmp27z4y95UXNy1qOtk11TMSmMkwDIp5NZOMZRkAPiOgKIZWBIFLLL954aaZcyd3z507dRAAYNe6XRaJ4y779apXciRJyh3o81wuCNxRrxe4M/0QAABFVotlWZ00NOSbWFKWfzgzO6XpsZ8tf02W5ej06dMThBD6lRfWV2oanvvkE28sAELy/YHoYpahtwBA//TpSOno6Njj80WaP3jvoK5md60+GIzkXrVkzv7UdGvv5MkFp0TR0j8wkJ0E+P7ptRiI6DWWvUIS5cJYLGG65/4bt7IU23bdNxY2nnlGFAAwP7h9Vb5nJDjraH3r11JT7Hka4FQ477R8IUSjlI7G0vxkQpwYDEZTrr/hind5ntn7q1//cCcAJGtqamibzcavf2cv2905OKOzfWBmTnZKpSjJGC4goOJx0QoIYb2ej1VOm7jz23dcc3Tq1ImDAKdPhe7+ZOKNf3xABf2RSSMjgctZlg+bzcCtXw8qAGgAAJKsTdBUMsPnC2cVFJpqJ00uavrhg9961WyGZE5OTpIQQr+yZn1+UlKTL724uTQZFzPD4eiVCNBJOO809l/BGWUnUFfXuKOxoaP1wL7G9Gg0bk0kRMMPH7hpG6fjgunpdr/TaWnLzs5W7r77wn2dqRgQq68/ufbNf2y/vL9/xDEy7M/RCfzww4/d9r7RKPhNJl2soCBryOPxJNau3U9Hg9G5SUkpDQQi6fOumLrdYjEdWHrtg+8uWAAJOL032WeffN3f7/bOONXSs8hmUyrikaRh5cqVf1q9ejUBOP0uL73qR6lAyFXJhJhBUSh2zdev2MvruI/vvvuGFoSQWl1dLVitVuHvL26b0NrcV9HbMzxJxVqllEhIcEZAAQAyGo3CyJC3NCnKVwIgYrebu++8+4btZlvKtsWLpyQQQqSlviVjw6bqkoOHG2dLkiTE46Ll/LUoKCigPB4P5x7wFen1fHrZpILjFotp6+trf30AISSN+l1372q0HW84VdbV0Z/K6DlBURQWACAWS9hkUczu7R2al1+Y0ZiZldr26E9vei0QCEjLli2TAAC2b69LZxgy8aF7n1ikatgZCsbmEwKfwDgCiqYpxaAX4jfeOH/9lcumD1RUVATG/r+pYwO69tr7rE6n1RsOxawDA95siLOCzWaT4Dx+k4wnCxBNlRICNC9w/QsWTDv2x79c0najE4m4YcjtXSyKsoAxQff+6Kb37HZr7+LFc9oBABoaGgyqSmX/24+fK1BUrcLnCxdTCFlHO1DikgsQNWnEE5xgsxrdS5bNqTPw7Pqf/PIHfaN8/6mn3jDwFGNd986uZQOB6FRVw5NVWe09R0Apqsqqqqp7/Nd/+83Y66riFBKRpOU//u2F6+LxpINmaNVqN//nYz/9zs717z8Da/68fjHCcBtFUyrDMNv+9trPH/d6vf1VVaUKAIwGUIQBYPOaP6+Ph6Px/c8/+9YTEyZkL1jz53WiwZJ4Ac4c2WVFYQkBQdMkZmJJdmYolMgBgMYx/aw984PahrX/h3YFMYARCwCQFNW0rh73BEKIHgAUhJBSUpLpA4D3zvy+EF55ceNEoNAvAUEuRaPeZ9f86A5NE3tnzZp2Tq7JokUzD2x+u9qNl2stP330L0/TFFW0bvNHj2JK/fvoHMbCYjF8+stf3/WyIMh1c+dOPWuyuGrFVWEA2PrrlS/rorFY89rXdjwyoThrciToWVRdXb11wYIFGADo0oKbfogQmuhwmEdUGT3x0CO//njyZHTWdnzG0VgPAPUPP/iH7LbW3mlH61oXLbtu/qIdO/brAeBgUVGR55ln1kXT02yDNEVFAQBSXNYeh8PYNm3apONj6a2vb8n4xysflG1a9/HyikkFH11/w/yNNy1fvGlsmzMVDOSdO3f+9jcr35nOMPQ8TVUXrlv3sQsAaj9vrZvrmtOfW7OxfMOWPXdkZLq6pkyduP+3Tz7w6Jm+R7VvFQBUQsiz1y5+qHxK5YT8zs7ByuPHOyZ3dnau0TQtNKrUjILjGJGm0ZEn//jD7zMMExgbOHDGVr726d+/0X3l4lmtz/953U8dDm5K08mNd1AMu54Q4g+Hw6aqSd+5TlG0a3Pz0tsQhf7+3Is//TtC6Kyd/cx6dwDAM3d/dzUfCEYvO7DvxNKySYV1n3xS6weAAwAAGJMv5SQ1fXpF32P3P6narHofTSERCMEZ2RmtPM97KyuLPF+kr6qqSS3fu311ntlsCgGFsChK0ZKSjCaKojyjjvzOzk6LzcalvLJm5502m8k7sSTnRHQo+pMX//bvofNOhzIArPve8p9XL7xyxsTmxs7y6t11195//xOVS5fe5Jk9e8rA9u375lmMwhV79x6fNX1G6a6cnJQjP3r45mcBAO6553QnCxcuFAFAJIQ8dPnsO2/MzHZl1uyuvxkIzm9oaHhnypQp4pNPvmzUs8Y7dXrdTI8nZPv5L773GEVQ/fJbFlePnV9pVam7sbHR963vX33L169+7EmGoW9UVY0f28ZsNlN6vZ5DCCFV0zifJ5hmd5jTamsbUwCg/8zexgDwxOg9h+rfhJ/+9PTfb73x4beC4ehsQccmVUn58wt/+7f1TqfznH24dOn0IQAYWvXLF/7e2tQ969PqozeXluRuOHbs2MDUqVPPyb00mvQH73/kllf0erWtoqLiMwFbCCGybdu2RCxCP/ncs++uGB7y3ai3Gu8YccNRANgFcNpfvH//fv1d33nmOoTgioklOSdURdl73Y1XXFKC8isvbro8xWqf5vWEMspK8jbefef1Hza1CDWrV885u+/PBLy1EkJuBwDqzBrhl177BRBCUFX5rXM0gn9eWprfSjHUR6sev/dXAACP/cdZTwI89tjtcQB4ZsmVDyamVBbrN727604A6DhHQGECSNMwW/1x/ayx1wnWWIyJIOh5kRfYdp1OOGox6psIw/gAADxuv4kgSHU4LMN6A++laTrc1dU1rrOa03PDVCzeDgCgatg4NOxNZYLsWf9HWqrTnUiK6SND/vzmpu6FP77/T5lzpn/nVFpqSiQzwxWfNmfiAMvywdLSpSNVVXDWOWmy6gKIJj6GZSSfN5hZe6iJrij+5n12qyl04/WPhCvKcz1Wpy20aNHkoWAwGDjfYXsx+HxhDgg4eZ6TMMcEVBU8DEOPW0FDR/MREcU7NVUVaYayeDwBFyLUuDlFGGNVx9KJRDJzXIZlNOqSsiKfcZ5TtKypHAALNTU9XHq6ZFRUVcdxrJaW7ujkBEOkqwsuOCen3dbRSQ2kAgBomuJw93su2cQ5Cq83YOZ5xg4AkEhItp7ukZy7v//4NeO13brpKGe1GIoGEBBZVnTRaNx0KWMMDHusOoPOAQAg6PiRtFRHK8A5wuksEELk7tt/k1Q15VRf73AKQsjU1+dLgdMM8hzGYLObhwUdN8IwTHxwcHDcsGmTng5gSmjFhKiYAO8dCbgUAmxNTQ3jcGTYaJrmVUXF6emOdppi/HD6RRwXzlTbgKSoPQAALEUZ/SN+56XM/38yurtHjAZeZwMAxAt8IC3D0SaYbBfcc4LTrNo4tu1UC50BAOD3RlwsnFag/J6QHSNkBgDgBa7P4bT1XGRozZVmCamSsSMYiFoJQYIoiraDBw/6QyGNikLAhTWsAwDQG/lWDbRxhXN5ebl28uTJqMls9DIMO+zxBnPH/j8SiWBVVRW7w+TBGrEHA1F7/ZHWZffd+bvihZfd1ZWW4oymZznisy+b2qeqJHTrrYu8Y0tKeYZD1kQiaUVAEb1JX/7bX78euvv7j39GsAAA9HQPTwiGYikAAIKB18fjymcsOhgTwjAXD/HX6XRaMqm1EQC30aQPHTl8cirL0QFCCI0Q0v70p/dMej2UIZq2q4qsZWa5jlAERi7V3Ozzh4zRcNwOACBKckgQuP7ycu+F7h2NSRj9QX19vU7RNL2YlIzxhGjQ6fj8C/EMAIDe7qGypCgZYvGkmRBgzxFQhBBK0zDX2tx95Xg35xdktDhTrI2PPnrbC7yGW2fNqvADAAyPBKwIQfb0mWUHAJA7KyvrglnsV145ue/DDw+JAACqqpp9nmA2LahnBVRpSV7vgNub2tc7XOYZCd5A02E1MzulmwDpxQQPI4z2YBnaolEIrVoF2uhC5OS4vEdrObcgcEm/L5Q3MuyfwAvMdINBGEAYBjChjhENd6oqOlxYWBgFuDAzPx8Bb1gAQtL1ej5B0bR39uwpAxdqe/XyOSEAiD5w71NJlmOcPm8og8IgjNcWq0TW64SYMyCP+8DNNlNCVJTTgRoUMJIkC21t3aiqysSLot6uKpqBY1l10uSiJgqRwIoVF66dN2NueVP90dYMAABNxak+fyjtUuc/imRStAs61gUAkEhITrfbV5SV7frOuG1lDDzHWxGNsCQrhkg4br2UMWIJxcHxXCpCCFnM+v7Zs8su6ruZPHNiHFTScKyhfRJCCVskGM+kMBUGgOGx7dIzU/pNFn3/+SersVg8f+5wTIspBGOVYKzz+0IZFCAWwMWEQlEXw9A6CSE8tarkBADluVi9u+mzSrs0RbUBAFA0ZQ2Go+kAAHa7nQQCgf+VeYMYIzNF0ymEIMpg0HmmTSs9TnF69ULPZ86caTIN6olD+05WAADEw7EMDFQIACAYSbooRNkAAAxGXef0GZNPXWhchJD2Hz9bE8AAjS3N3ZVAgYAQ7+Q4LRoIJGgGy+kaxgYAgGkzyo9pGjNuROSZE27whmUPuzVV6z9fQHV1dWGj0Shl56QNhoKR1O6uoTJCyG0Mw8hGs6GVUKSPYDwCgD9mGLoDAAKEEDI6f78/6JAl1YkQwjzHz4hF4xkXmpN3xJ8dDsecAAB6vWBUVfiMTwwQYISQlryAAgtw+vRPCDnxxyff7LE5TP7OzoF5NM0MAABNCMFrnl5rkUVuNk2hVFHF+PobF+ymNDTwxrrfXajLcxD0h6zRmJgCABCLJQKFxZkdZdOuGnffj/M+IKPRqFdVbIzHRXMinjBxLFNCCB6XZwAAECA5sVjSHIsmrIQAf46AYllaJoQL3P7dZcvHXpexoikJLI+4Q4NqMpqIid7o/KVLz7FxEgKIoWkZPiepLx6Pq7FY6AwjRUAAnePvMtLU05OqilNmz6mYEwpH8pJx2enxBgpHRoKpfb3DRdu27r/GaNR5nSkbB7529cyH9+49MTB//uSgLFd1FE3sGrrtO0sXYwqXYpVkDbl9JZFg1B6LJhzv/OfO76kahj8//Y789RuuWLPmL28du/9H39p6MVrHAgNBNE1rLEt9xpd0HggAqEBRGCGKACboTNH4/xIQAYTw6FrZAMnyaKeY4RiZhosXB+UpRiYaPiOUEZw+iX8xaJqKRv2TiqrwyUTCGPSFL3gywJhQZaUFDbn56SeyM1M6tmz//DEYgQGGo8/MDakMT1+0phzP84RQskwIwQCnE24o/rPtaIpSGYq+6N5UDAqmFGpUcUGYAKJGKUFnNyqhWUqhyMXXm6YZFUaVIISAnHl2Xq8XKIr6XymgAAAQwqMrojEcpVjt8QvOxWp1kGTMqxBCTvvwEEaIOb3vEFEQgIYAAAgBlREurjCyLMKYnPW/IqQiNBpziAk++4KJoqRqGr7os2E5VgNAnxnvTLoK3rhx709KJxekX3PjgtkBTzAnmRDtHl+woL9vOL/xeMf0zRtqbnQ4rb0b3t5xKm9C5r9t27bNu2zZMgljjAjBCAOhksmkOegLXzC8n+MYJTXVPuRKsQ5nZqe0mEymf7q0GkJI/cNv/3EQI4L/+uf1j6ek2ie//eb26+0u6yfrNtfkiAnxTkHH8byeb8/Iytnqdp+85JQPggnSCD790CgAmaK+EDNLJCgEcIZnyConJiXDxXiGTuDkjHR7f2lp3lEA6DlHQFEIEYpC2k0rrmwbe11VNUzTkqqqanA0h2bs/3mBVwBwMhyOWRANhrq6Onb69OkqjBOP7/XGjXrWfEHz0u9f+mlky5b9mKe0xs72AV8gGLOGgtFBjLFLUVWrxWKcgxBw4XC8KBJMFrccP4UBILhwIVKrq6vj1147r3vv3hYtEomOJOKiLxGXrAQlbAxL+xCFMjRMTWxv75vm9QYUQsgOAMCrVr120UXmOEYDgKQsK5wsg6G7u1vIy8tTxkvE3b69nbNaZQNFIQYQEF7gkvgM8/yyIAhJDUl6kRCCMcGM1xN00BThTytz42uzg26/HVFwSWa2C0HHcBJoRAQA4DkuaLWZ+zSs1V/sHo5nQK/nu/Umw/DF2o0CIUomZ8ZQNdXoGbq4aWxkxM1gGTkJIWfNqIqijL5EGkPTKssyUiwWN2sYmwghNFwgcXSwLaiXWdmJEEIIgcoLXIIFBptMNqyqI0mMsQYEKK8n6NA0TXcxurzDQXNCkq0AAIgQRafjkgAAqqoSiqIwASCEEEpVVZa6iAZDCEEl+TdShHw5fqv/CliWKBpgEQBA01SdZyToCEWEC2o6LS0NtI43OAg5HcjEskySYmkFAEDgOREBJQMAYIzNI26P9WJje30RHmvYgQmhAQPWKE2URRGzrExYlk0gdFrAhUJJp6Yl/TAmb28UhBBUU1NDP7HqXaOiYjMvsAmAcxVOhBCprq72S5KkyLKga2uhh4PBsMUXjPRjDKkaxnaT2TAfEBiHhvxlE8pyc0IhBgOAW9DxEgCSKISwpmltBEgrxhcQlug0v+U4QWNppt9q5S5YuOBSkJZiH8EINTIMLSEg1iOHmyrz8zK6rWZT5qlhf0pqiv2UyWw4NW9eSQKg5JL5ESNwMi8pSQAAnuP1brff+d57q/pgHN4+DghCrEIIUSiaUvV6XYTj2D4Na4cvdANFAVAUDSajPoAQGjq3Fh8gggBpU6YUX9CENR5sNmMCEPIPDHgKeI5NU1VVRwiJjccEAoFoBmdgSy7U15l7ogBw9JyZnsl4f/J3//iP3R8dmd10smtJMiEuGvEE9ADQBHDW2e2DcXJKjhw5UfDM79de3dU18Niplp4lmGA7ADwHF0liHIXVYlCAogPdXYOFiqqlJpNJW39/fwjGqeSekoJNclwpoClaBwRhq80UoOkvpyr4GE1RTs+3hgjGqqKo+p4udxnH0CYYkzR9PoZGPMWIorIvZRyENQTwWbeZ026LAKGCAABOl6V94aKp+x965Pan/7nZjA+TyRjVVBwCAJBENb27e6TsYu07Ogb1NDBlGOPPRGUBgMrp2CTHMyGfJ5hFM5EsAODh9DP/jHIx6PG5CI0rEEUxCFGS02Hx0hipgpChEpIIyKomY4LZnq6hMiBk38Xo6u/35iRjUgEAAAYSt1iMQQCARCKBzWazAkCAYEKLoqwj2vhJo6N7XlE1hqYv7cSLkIKSSe2/fmQfByYTF2eBCgAASKLq6useKeUl5YJ1/4JBmfFLsRICYAcAsFlNAURO13kzmcxhdCYoR9XUvEG374IKDCEE3bD0IatGoARjImBNUwwGNiAIJjnLZGU0gfbSNJUEAIhGIxUIQRucZ+I9A8SyrG5oyJeuqVqu3W71ojEJqaM4w0cCAHBw7PW6ujrW7QZ254c7XzxxoqO0s71/+teuqppJiMoCgNvusITjcTHo84XS4nFx84b3n9kwNoXmYnjqT49cSrMLIrvI3JNMJvtNZoMPEHIerWu5weGyBewOU2o0HHdUVZXWL14ya98XLVtltVtjGEMAAMBg1KWEA5ESgAUNABeutDIWlZV5cYIhyXKMlJnl6ucFvvqt9U88eanjf+FE3fEw7/KpjQjw5vc2fnqv0aif9fbrnz68ff3eF6urq88GI1RXVzMuvcv581+9fE0kGl90fh99fX06Qojtx/f/5U5OYJibViyuAWBPrlhxuRfgrOAib7+9qwHjw1kAAJhgStNO26qe/v2rV0fjcm5Px2Ce2Wr48Af3LDk+tpySqsaGFE0ZcjqsIz5vKAUrhDp+/DiaMmXK589vfuWgRmBDb8/Q3RTSMv74+/WPGky6jYSQowihswLu0KFD5heee3t60B+7HYC4CCH9UyqLN1KKdNFclEsBAoSYM2ai8vJypaamBk+fWbYvFI5V9nYPTZpaVXLtU79/zUEI2QwAZ+3iBw402g2M3nXnXb9aHosm8sfr226PExo7AuRMJGVre/9U/aBXBIBzovg0xt4/5PcxhcVZJ8OhWOHaN3bm1tTU7dQRzTtr4axzGEJjY6M9HJZM/pFItkLktptuWuy9FMesJNF9w8MhJic3rT0QCKfXfFKXuWnTJ1dgrPV/85tXdY1t+976XVN37Tpc9dFHdV8Tk5IJnacwIITIg/f+vp1g7e2d2w9/i+e58p8/9vx9Bgu3mRDSM/qyEkLQiRPtmav//YUrfN7QrSxDI03TunKynO/rkyS4fv0q9bbbbvOUluQ2SJLiPHm8Y1pBQeaCV/+2OW60KNvGlo/a994+E7JwuY89tubqeDw5LSXVNijL8kmjRX8YAGDOnDkSACg5eentkiinHz/WNu3KxTNnb91cw11z44KTo/0QQtCaNeunUCoukSXZwDD0uAU8rWa7hjkSQIiSACH6+LGuKqRpJwBg5PPW+otCEAS/b8CjlFXk1wYDUduRI01zf3j/jVe+880P2m+5/bpzolR37jyUf+TA8QnvbNh7HcMwJD3D2UNodDSdNiQAAIwsVxsMhs02u9nTdLJrbkf7QMqePUerNQ25Fy6cGhq7Dn9/ecsyQlELW050TSosyDxhMOoPy7Ic2Lhxo1Y+bXlcinW9J0tqDsPSk9f86d17zWbD9ubm5uHGxlLPmTqiQAihf/vbF9N8nvgdNE1PjUUT/NJr572MKOrE6L7cu/eETdPkrL/8Ye0tNE2LDz+yYjNhTb2Xna5XB1VVVWpX13qcX5DdeKq1z3a6X6CJctoENn12RXXLye7YyYb2WZmZKTc8/MBTaYSQ5wDO/T4XIQR98MGeqRRFoays9H63G4eXLbtwOapLwYIFC7RVq1bhyxdM29DS3DOls6Pvio1vf/R9QEBZLAa/Z8R3iObUvV+038xM+7FIIBziOObHPl+48uUXNqc+8Mgte+vq6kLTp08/W8iAEILefXPHVMKAuaIiqxMhFKyoqIgBgDpvXkWLhmDDkQNNi81mvfbqy5taNaTuveuuFYGx9wMA/8HGmrx4MpmTW2jdGwqF5C9FQOUXZbkpCh9nGFomhDgG3d4ZHTHxQENzz8ij9z0VkWSRevu1Gj6ZlArCoejEhCjnnN+HTqdjwuGwIZFITkkkwbS3ujYZCITRtYsfGJxYlJtUNRVpmooO7T+REo8ljQBAKEBhhqNjAACxhJQVjyTK/P7wFI83MPKzn7xM3fu9lW6OEzBDM+TxX72rFyUxlRDCCQIf5VgcTSQSeP369Z87v6KyCRGiyI28wHkRhQzDw/4q5EGdX1/2Y+Whe3539rT21O/eyQ4HE1NkSZmk0/EJhmOGSiry2lnW9KV8ouC0qlo1KqzVH93/ZCvudpsURauKRuKlp5p71OuX/LjV4rJIj973lOKNhZg3Xt6SwXBUbjKRzJBlZbxTBhgMBqyqrIcQEmEYWu7uchdhjEOzq77VnZadJrGsEF+//onBuXNzksuX/ySQ4rKd7OsdLo9G4tkb39k1g2jQ99A9vxOsaXpVjTIoHAkwT/3u7VyGZewmoz6XY9ig3c4F4BICUxYvnpJ48cW3gs4UW3OkIz4pFktkffJx7UxZVG033PAIk5vqkuOainy+ILtrV13V4KB/siLKRoIxg8b5ll5xYa6PZuHo7t3119I0pe/rcc+UJLnrhmWP6Ef35j13PE5JWJo0PBKoCIdiRUajbpDn+d6Kafn9Xq9XXn3Parx69WrpB99b1Z2Iii2tLT0zYolk4dHa1llDQyNdt970SzkjzSJ7/SHm9fd22xmarQiFogWyrFizctIaaJYdXLRodgDgrCMZf33Zw+0jwwHGEw9kDQx4Jn/00RFy++2/SJg5AQMALF30I116hm2qwLOTMSYM0fC4RyjBCQpWeTcBEqMQRepqmyclEjKeM/3byuSq8pjBwMb++MefXLBKxRdBRUWF/OMfPxNPTXecCIViU5IJKa/xZNf09tZ+4/XXP6Tkp6dJAAD+QJjZtP7jSaFAdGIkEk9zOi3tDoelT6ebH5yy4HTkY16ZK4AJcdts5jaPx18sJqX8t17fOkPT1Pbbb/7FiMthVUe8fvbGax5m0zJSZ0YjyWJZUXRWu6ktJdXWPpr4vm5duTZp2rRejmd7zWZDb8AfKU6KUv/vHn+rihW49gfu/I3McwJeccMjZkWjsliWnknTlJll2dik8oJjGFNnFSs1nOQJh+yxeKIKY4LffPPjgYQYM95602P+jLQU+cG7HqdkGShWoG2iKPMUTamg4QhFnT6FlZUV9Qz0DtsEHR/CmGQPDnjJzTf9bLfNYkisXPnnJIAO+toHuSVfu1+XV5Q5w2zSK1UzSwhFMRJcgiXnYhhV4J//y/oT7W39TkVW+Ug0kcdxTNxmN/djVR1KJHxfeB9UVub52xt7WJPF0EMAC35/eMK7az+aptdxnnu/t3JIrzNqiWSMvvGah/nUjJQqvcCZaZqReB7JABBDCJFf//pvwzRG9Qf2nFgiy2pabV3r7ISU9N1++y+Gi4uzxGQAUw8++DQz0OZ2OdMtEwQdn8/pK08ajZbQlyKgHnnkW8cAoPH9jZ8+4PeFUw/sO3FtarpjisNuGsIUOUEoig9HktYjRxoXmcym4Kg9fiza29tZmtYZujsHixJJqfREQ8dVmVkpnSku6wihoUnTgFMJYrZu3n2jphGaopBms5s+vfLq6S2/XAng7vdm+PzhiUfrWxdwLDOb47lkTnb6Tg1AYhgkYaJUhkPRlCG3L2/27Mm7HE5L7dy5c5MAACtX/uOi87v11kUeANix7cM9VwQDUe1ofesCk1k/2WjUhfMLMj7BGqEIwVRLU/9SMSkZRFE2LFo88+2MTNfBhQtnfib/6Z8BAQAR4XNMN3ffu+Ld36x8ud9qMy061dq7qLWld1FxSfZis6LvBQZ5aI12nmhuK+rpdldkZqX2IJqKJpPSZ/xQy5cvVwBg93PPvjPJlWKft+/TY9/Q64XFdpflLkpDPSxLDgHAL0+v1XcDiYT6u4fvf/bHBCBn86ZPX8zKdrVMn152DGnsiEYpvEqQ82hd2+XRWMKhKRqT4rJH7n3oxkEACH3ePBFC5MCBA35VZJ/6ySN/eigWTWRuenf3H1yptt7CouwOoKkeSkYCham0ndsPTlcVlU/PdPV5PIF0Rf6s/Hvg0Vs6AKDno52Hl/j84ck11fXLU1Jtc2w2k5fQUEcoStBAFap31V+PMaExxsyDD614Iic3peH8xMjHn7hn6/q3Pmk6caLj2iG3d+6mLveVUyqLF3E2zQcMctMM7ezqcmc0N3bNomhK0+v53p/98vbfMwzdjBA6x9fxwI+//be//PHNq/t6h6rqa1t+dKq5JzB77uT9Ko/iCCFCiFZSe7gpOxCIppHTDqhxT5/TphVFXC7Xpjf+/kEVy9FT39/06SNmizHgdJp9HKL2IRXtB4CLb/AvgD/+8RGpvv7k048+9JfvGYxCwUfbD/3cbDV5iidmtyoE99AUIhgh157qo1WRcCyVZRjJ6bJ9/O+/vGPjgoX/JzChoqJC3rLlYDNN5N//26N//k0kEp/0/nt7Xi0qymnIy8/oAwZ5EEWlyIqW+uGWPTNYjpbtdpM3LcPx5o9/suLkX1/+BQCcDmwAAM/fXtiwHdHUwK9+/uILVJC6xTPk/8a8y6Z8pLMZI4QGMRCITQ0Go6nDQ4Hs3Lz05rzKrMPfvfvGzQCAf3DvaZr8YoxnJGLv7HJPTCakvObmnqWFhZkn0jKcQ8CgXlVCBgXLuq2b9nyd41jJZNSHvaHE4W/PLu4BALjuunmN9933VHTptfPe//ST+ss72vtmFE3ILaUZ1J6uOTs0rNCEwhmSopTt/GD/RL1RN2w2Gd6mgLwB55VV+2dx2eXffP/Vv71vNBh134jHkmadjh+87TtL3qQw6b3nnts+L8DrM6ioqIg988y6wUd+ctsfX335/Rs7OweW1h46udaVau+ZOq2kAVMkrgGllxUt/5OPDpdqmGjOVNtfEU19AGdO8SUld550ueDUJ5/Ufj0YiBZu2Vjzs4ophQvS0p1uLFNtQMl6SlaM3f2DS042d5iTSck4+7JJJwUBH2UAADLS02REo/ZEUtIriqZ19H/hddEAgJiM+t8YjLqynNy02f19nsmekWBGTXWdVafXSRzHJadOK9mGgDqhYTKSiCV+7XCY3Kmp9j6Ko7HZbI5hjHuLS3P/oirqBIJhZjQWd3m8wVT3kMcJgBACBJlZKV0cy3WZTPqTBouhOZk8nYul0wkf2K2kcebs8uFIKFYgSoqzvral6vTLjQnDsKxOLwSmTZ/YaLOb3zYYDWcDQbL1Nk0zy/0mk2HEZDH6BYH3cRx79tRzmmEQYFh2ndVmqps5u6LN7w+WiEk5dU/N0fmjUSpGkz7scFmb7A7zCaNJv41FbO/5C5XmtAYxQn0Wi9HP69kgsFTY6/KOa8+1WAyhRFQaMhqEMMczfqvZPJxti55lVJHIUNhk0x9LTXP8e1qaY5GqqYXDw4FcrydobaaQbHfYohaLaWjWnEnHTGb98YF+zwRJlG41mXVDqXbr2VyRM/NT8vIyP9FkOWgwCHdKkmxKJiWToigcQsCOti0vL1cbGhoGnC7zmzzPHtYJwjdESTYcrT81VZZlQAghlmFQapqzL4uhjxEEBw0WoTYej1/yN2YGBubIaWnH2rKzU9+wWAy1oqjeJomSruNU78TujoFsQc9JNpslVlZRsIHn2LDDYYnV1bUsiceTKWYz5yGEH+twJgCgcgL/UkqKfYLTYV3o9QbLItGkpfqT2isAKIQAUE5uehvDUK08z51EHPMxkslntE1RFCOEYbtTUuw/Y1m6kkZUmWfEX+gZ8btOtXRPQAgxNEMrEyfm1lM0VcMITBshuDGR0H2G+fA8dSoz04Xw9FIcCkavVGTFWV/XUoUopNI0raak2MJ5+Rl7Cycw7qA/Mp/XcZLJqI9JBCtjDa8LFizQDh48GC6bVLRZSirdQ0Mj31FVzMbjolHRVJbW4II+ovORlmmLII30Ol3WQSDEGwwGE/BZXx0xmwV3isv6HstAB0Ox30hKsn2gz5PT3zuSDgAACDFOp3U4I93Vgii8xZVqOcZq2mfCyM1mMRyLaQ35E7L+nIyJEzUNL04mRX1TY8ekMwVYaQBgyiflf4oQasdYO8gKXAtFUZ9ZT4rDbQiBZ0rlhNWSpBTJsjylpaWnHBMCCDCmaJbhBS40c05FNU3RB3mBOXX+3EwJ1ZcwCXWTpkx4ThKlIklSpiYTorm7a7Cwo70vDyFEIYTQhAm5xzieaTWa9cdSdBZ3JBI5q3DrdOBTRXhlYknuSVFMnxCLJeb29gwVtp/qnQBAAcsx2GDQaZMrJ3wgCHy7TuA2qUh/1gXgctoiMtGGTGZ9kOfZoIEzBHh75JKDGoJBkErLCtoJljeeOtU7n0ZUJ6ujqvV687inJ4riRIahAxabyWuzmvwpLnsfS5hzTnPZ2SCLYVSdU5AaNJp0R2KxxNcVRePrDjfOIACYAKEQIC47J63RYNR18zp2MwBzVoo0NYG6YAFgvVH/tNGom5CdnTonGosXdLYPFDUdb59A0RSiKJqkpTn6mSy6l2XYQU3Dx1gWnS7Z7cpOT1Casi+ZEAVJVr5wtNCo2aKhoWH7zq11vcmkHOjrHZHiiaRZTEqC0axGrRZDsGrJrBqHzXKM0wsjf1uz7msms6Hd7rS0Wu2yeqbGnHzwYNPOxuOtjS1NXYH62uaSUEJ0hYIRC0IURgiRaXklTampzqYV31pymKYd7oUL82UAgD+teezk1vU1fUPBIOytOVYxMhLIdg94ijSMEcYabbVbQiaLfnDGzLITVmfupzNmLPX9ac1pxySXrlN0vL5dp+Pr9XpeNZsNXgApft4cCSHk2Ntv7+6Ox6PyB5tqRkZEX6HXE0wdbVNYlNWTmu5su+Xbi/chRNXfcMOC+ONP3XfOWjlS7MOaprXo9fynHMe2GI1MuKdnfAHlNNkCMX28lxe4PRzLNFqthoFhb/fZtnPnzk02NjYOqKrw3huvvid7vcGSnp6hOaqi0ljTaE7ghrKzUk9dtWT28eKS7KZXXtjc4/MEM3meazU5zw1rRQhpjQcaWwlHBn/3h7dyPSMBV9QdT1dVrZ9l6b4x7TAAhFpaWg77/f6T72+oNZ042ZEzOOCZEI8l9RRNYZ2OF7OyUhozM1N6b759yU5FISPnVwa/GM74DbyHDx8+kEiozS+v+SC1p8udFgxGMzHWaKNJHzWZDMNz5k3aMamy2IMwJqfaegVV1TItFuMIRWlnn92o6YMQsv/117d3xkLR2MYNu8ORSDwr4A/ZEKIwRVF4emHWyZQ029Fv377ksCCQjjNRqOcgPz9fJITI8+dXbt6y/uOBZFLq++D9PV+TZIWTJYVjGFq1WIyhsrKCUxPL8rYuvXZuV2Vlybj+x8svn+bds+eoomk4/OJz68jwkD+vv2+kEACAZmg1JcXWkZ2bdvTqJbOaNrxbLdIMjXmelRmsfsbPBgDJpvquumGvr/fZZ9/MDAQiplAoYsVY6ySEvuSKElarxU8DOWGxGMyaQjpUVU0mk8lz9uaZ8SKNjY0NFEW1vfriNn1be3/ukNtfJiZFnhAAhmO01FTHqdzc9N77771ugxpVw1MXTv2MmftMpYjBgwdbPjpWe7zp4P6TVHNzV14gGHYqssayHKNwHCvPL6+sNpuNLbfctnDvyMhILD8//zOO/h/8YIUXALx799at3/Ru9aSeLnew4Xh7iSIrHCEY2e3WkF5vHll6zdwdPM0eveOu68+W2RnF1bdfHQeA+EcfHd7W0tiR03iy03v8WNuESCRmj8eSeppmNJpBWnl5Ya3daW789nevPgSghMbulWeeeSxOCDm0ZUtN0OcLN7/zn9t10WjCFvRH7IAQMVsMEZNJ7502feL+9Ax719333nwcAPDPfnb6fovT7FdVpVsQuD0cwzYZ9bx/cnTKJQuohQuR+vLz63sxIjs9nqCqyOpAeXlWq6Io45oQbbZUUVFCIb2BP6A3CCGbw9Kq4nML8Z45pXYcOXIyIklSy7N/eMs85PaleL2hTIw1mqIoTSfwUmlpXm1BUXbbo4/efgIAyE9+chsAAKxejfDq1YAJIbv/8fJ77fG46NuwYffCSDieGvAHbTTNaBzHSHl5GU05OWlNly+c2paUPQOLF1+G/z8XyP0uWNQ/dgAAAABJRU5ErkJggg=="

    return logo
}

function LoadOwnersTable(data){
    const table =  `
    <tr>
        <td class="p0">
            <table width="100%" class="border_tbl" cellpadding="0" cellspacing="0" style="margin-top:10px;">
                <thead>
                    <tr>
                        <td colspan="7" align="center" bgcolor="#244061" style="text-transform:capitalize;color: #fff;letter-spacing: 0.5px;">
                            Owner/Partner Details
                        </td>
                    </tr>
                    <tr>
                        <td width="19%" align="center" valign="middle">Title</td>
                        <td width="21%" align="center" valign="middle">Name</td>
                        <td width="14%" align="center" valign="middle">Phone</td>
                        <td width="14%" align="center" valign="middle">Mobile</td>
                        <td width="23%" align="center" valign="middle">Email</td>
                        <td width="23%" align="center" valign="middle">% of Shareholder</td>	
                    </tr>
                </thead>						
                ${
                    data.map((item, index) => {
                        return `<tr>
                        <td align="center" valign="middle">${item.title || ""}</td>
                        <td align="center" valign="middle">${item.name || ""}</td>
                        <td align="center" valign="middle">${item.phone || ""}</td>
                        <td align="center" valign="middle">${item.mobile || ""}</td>
                        <td align="center" valign="middle">${item.email || ""}</td>
                        <td align="center" valign="middle">${item.shareholder_percentage || ""}</td>
                        </tr>`

                    }).join('')
                }
            </table>
        </td>
    </tr>`

    return table
}

function LoadDepatmentsTable(data){
    const table =  `
    <tr>
        <td class="p0">
            <table width="100%" class="border_tbl" cellpadding="0" cellspacing="0" style="margin-top:10px;">
                <thead>
                    <tr>
                        <td colspan="5" align="center" bgcolor="#244061" style="text-transform:capitalize;color: #fff;letter-spacing: 0.5px;">
                        Primary Contacts
                        </td>
                    </tr>
                    <tr>
                        <td width="15%" align="center" valign="middle">Name</td>
                        <td width="15%" align="center" valign="middle">Phone</td>
                        <td width="15%" align="center" valign="middle">Mobile</td>
                        <td width="22%" align="center" valign="middle">Email</td>								
                    </tr>
                </thead>					
                ${
                    data.map((item, index) => {
                        return `<tr>
                        <td align="center" valign="middle">${item.name || ""}</td>
                        <td align="center" valign="middle">${item.phone || ""}</td>
                        <td align="center" valign="middle">${item.mobile || ""}</td>
                        <td align="center" valign="middle">${item.email || ""}</td>
                        </tr>`
                    }).join('')
                }
            </table>
        </td>
    </tr>`

    return table
}

function LoadSuppliersTable(data){
    const table =  `
    <tr>
        <td class="p0">
            <table width="100%" class="border_tbl" cellpadding="0" cellspacing="0" style="margin-top: 15px;">

                <thead>
                <tr>
                    <td colspan="6" align="center" bgcolor="#171147" style="padding:5px 0;text-transform:capitalize;color: #fff;letter-spacing: 0.5px;">
                        Supplier References
                    </td>
                </tr>
                <tr>
                    <td colspan="6" style="border:none;"></td>
                </tr>
                <tr>								
                    <td width="20%" align="center" valign="middle">Company Name</td>
                    <td width="12%" align="center" valign="middle">Contact Person</td>
                    <td width="12%" align="center" valign="middle">Designation</td>
                    <td width="12%" align="center" valign="middle">Company Address</td>
                    <td width="12%" align="center" valign="middle">Phone Number</td>
                    <td width="12%" align="center" valign="middle">Email</td>
                </tr>							
                </thead>					
                ${
                    data.map((item, index) => {
                        return `<tr>
                        <td align="center" valign="middle">${item.name || ""}</td>
                        <td align="center" valign="middle">${item.contact || ""}</td>
                        <td align="center" valign="middle">${item.designation || ""}</td>
                        <td align="center" valign="middle">${item.address || ""}</td>
                        <td align="center" valign="middle">${item.phone || ""}</td>
                        <td align="center" valign="middle">${item.email || ""}</td>
                        </tr>`
                    }).join('')
                }
            </table>
        </td>
    </tr>`

    return table
}