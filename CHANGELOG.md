# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-05-17

### Major Redesign & Cleanup

#### Removed
- **Entire About section** - Removed all "About" content including profile cards, stats, and descriptive text
- **About navigation link** - Removed from header navigation
- **Google IT Support credential** - Removed from credentials section
- **AHA/CPR certification badge** - Removed from credentials section  
- **Network+ (In Progress) badge** - Removed from credentials section
- **All email links** - Removed mailto links throughout the page
- **Date/time clock from header** - Replaced with weather widget
- **Remote font dependencies** - Removed all external font preconnects for better performance
- **Unnecessary sections** - Streamlined page structure for cleaner UX

#### Added
- **Contact Modal** - New popup modal with VCF download, Text, Call, and Email options
- **Fixed Contact Button** - Bottom-left floating button (💬) to open contact modal
- **Header Weather Widget** - Compact single-day weather display in header (replaces clock)
- **LinkedIn Badge as First Credential** - Moved to top of credentials section
- **Custom Cursor Enhancement** - Improved cursor with circle ring for better visual feedback
- **Optimized Performance** - Removed external dependencies for Lighthouse 100+ score

#### Changed
- **Favicon** - Now uses DG initials from favicon.svg file
- **Navigation** - Simplified to Home, Projects, Work (removed About and Booking)
- **Credentials Section** - Now shows only LinkedIn badge and CompTIA A+ certifications
- **Page Structure** - Cleaner, more focused layout with credentials in hero section
- **Weather Integration** - Real-time weather from Open-Meteo API in header
- **Mobile Responsiveness** - Improved mobile layout and touch interactions

#### Technical Improvements
- Removed all remote font loading for faster page load
- Eliminated HTML entity encoding issues
- Cleaner CSS with better organization
- Optimized JavaScript for performance
- Better accessibility with ARIA labels
- Improved SEO with structured data

### Files Modified
- `index.html` - Complete rewrite with new structure
- `CHANGELOG.md` - Updated with version 2.0.0 changes

### Backup
- `index-backup.html` - Backup of previous version created before deployment

---

## [1.0.0] - Previous Version

Initial portfolio website with full About section, multiple credentials, and comprehensive contact information.