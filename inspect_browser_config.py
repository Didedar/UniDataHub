
from crawl4ai import BrowserConfig
import inspect

print("BrowserConfig init signature:")
print(inspect.signature(BrowserConfig.__init__))

print("\nBrowserConfig fields:")
try:
    # If it's a pydantic model
    print(BrowserConfig.model_fields.keys())
except AttributeError:
    # If it's a standard class
    print(BrowserConfig.__annotations__.keys())
except Exception as e:
    print(f"Could not inspect fields: {e}")
