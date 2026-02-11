# Google Search Console Setup Guide

## Step 1: Access Google Search Console
1. Go to https://search.google.com/search-console
2. Sign in with your Google account (create one if needed)
3. Click "Start now"

## Step 2: Add Your Property
1. Choose "URL prefix" option
2. Enter your domain: `https://yourdomain.com`
3. Click "Continue"

## Step 3: Verify Ownership
Choose one of these verification methods:

### Option A: HTML File Upload (Recommended)
1. Download the HTML file from GSC
2. Upload it to your `public/` folder
3. Verify in GSC

### Option B: DNS TXT Record
1. Copy the TXT record from GSC
2. Add it to your domain DNS settings
3. Verify in GSC

### Option C: HTML Meta Tag
1. Add the meta tag to your layout.js `<head>` section
2. Deploy your site
3. Verify in GSC

## Step 4: Submit Your Sitemap
1. In GSC left sidebar, go to "Sitemaps"
2. Enter: `https://yourdomain.com/sitemap.xml`
3. Click "Submit"

## Step 5: Configure Your Site Settings
1. Go to "Settings" (gear icon)
2. Select your preferred domain (www vs non-www)
3. Set crawl rate (usually can leave as default)

## Step 6: Monitor Performance
1. **Performance Tab**: See search queries, CTR, impressions
2. **Coverage Tab**: Check which pages are indexed
3. **Enhancements Tab**: Check for any errors or issues
4. **URL Inspection**: Test individual URLs

## What to Look For

### Good Indicators:
- ✅ All pages indexed
- ✅ 0 critical errors
- ✅ Organic search impressions increasing
- ✅ CTR improving over time
- ✅ Rankings for target keywords

### Issues to Fix:
- ⚠️ 404 errors on valid pages
- ⚠️ Mobile usability issues
- ⚠️ Core Web Vitals failing
- ⚠️ Security issues
- ⚠️ Structured data errors

## Your Sitemap URL
```
https://barakajoshua.com/sitemap.xml
```

## Your Robots.txt URL
```
https://barakajoshua.com/robots.txt
```

## Common Issues & Fixes

### Issue: "Couldn't verify ownership"
- **Solution**: Check that HTML file is accessible at correct URL
- **Test**: Visit https://yourdomain.com/filename.html in browser

### Issue: "Sitemap couldn't be read"
- **Solution**: Ensure sitemap is valid XML
- **Test**: Visit https://yourdomain.com/sitemap.xml in browser

### Issue: "Not indexed" for pages
- **Solution**: 
  - Check robots.txt isn't blocking
  - Ensure page is accessible
  - Use "Request indexing" in URL Inspection tool
  - Wait 24-48 hours

### Issue: "0 impressions" after 30 days
- **Solution**:
  - Add more quality content
  - Build backlinks
  - Ensure proper internal linking
  - Check for canonical tag issues

## Useful GSC Reports

### 1. Performance Report
Shows:
- Total clicks
- Total impressions
- Average CTR (Click-Through Rate)
- Average position
- Which queries bring traffic
- Which pages get impressions

### 2. Coverage Report
Shows:
- How many pages indexed
- Any crawl errors
- Excluded pages
- Valid pages

### 3. Mobile Usability
Shows:
- Mobile-specific issues
- Viewport errors
- Touch element issues
- Text sizing problems

## Integration with Google Analytics

1. In GSC settings, link to your Google Analytics account
2. This adds "Queries" and "Pages" dimensions to Analytics
3. Helps understand search traffic behavior

## Regular Monitoring Schedule

- **Daily**: Check for critical errors (first week)
- **Weekly**: Monitor impressions and clicks
- **Monthly**: Review top performers and opportunities
- **Quarterly**: Audit for technical issues

## Next: Link Bing Webmaster Tools

Similar to Google Search Console but for Bing:
1. Go to https://www.bing.com/webmasters
2. Follow same verification process
3. Submit your sitemap

## Useful Resources

- GSC Help: https://support.google.com/webmasters
- Schema Testing: https://schema.org/WebPage
- Robots.txt Tester: In GSC > Settings > Crawl > Test robots.txt
- URL Inspection: In GSC menu

---

**Pro Tip**: Share your domain with your Google Analytics account to see cross-platform data about your portfolio traffic!
